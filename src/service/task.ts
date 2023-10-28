import {formatDateToStr} from "@/utils/common";
import {DateFormat} from "@/utils/constant";
import {TaskEditRequestVo, TaskTodoRequestVo} from "@/utils/types";
import {createClient} from "@sanity/client";

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2022-03-25",
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY_SECRET_TOKEN
});

/**
 * groupId로 task 상세 조회
 * @param taskId
 */
export async function getTaskById(taskId: string) {
    const query = `*[_type == "task" && _id == "${taskId}"]{
        _id, groupId, description, start, end, level, finish,
        notes[]->, todos[]->, createdBy->
    }[0]`;

    return await client.fetch(query);
}


/**
 * 이번달 task 목록 조회
 */
export async function getTasks() {
    const date = new Date();
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const endDate = formatDateToStr(lastDayOfMonth, DateFormat.YMD_DASH);

    const query = `*[_type == "task" && start <= "${endDate} && !finish"]{
        _id, groupId, description, start, end, level, finish
    }`;
    const res = await client.fetch(query);

    // 데이터 가공
    // const data = await res.json();
    for (const task of res) {
        task.title = task.description;
        switch (task.level) {
            case '1':
                task.color = '#ffb900';
                break;
            case '2':
                task.color = '#2998ff';
                break;
            case '3':
                task.color = '#D22E1D';
                break;
            default:
                task.color = '#2998ff';
        }
    }

    return res;
}

export async function editTaskById(requestVo: TaskEditRequestVo) {
    return await client.patch(requestVo._id) // Document ID to patch
        .set({[requestVo.key]: requestVo.value}) // Shallow merge
        .commit({autoGenerateArrayKeys: true}); // Perform the patch and return a promise
}

export async function getTaskTodoById(requestVo: TaskTodoRequestVo) {
    const query = `*[_type == "todo" && groupId == "${requestVo.groupId}"]{
        _id, groupId, contents, finish, createdBy->, updateDate, assignee[]->
    }`;

    const res = await client.fetch(query);
    return res;
}

export async function createEditTaskTodo(requestVo: TaskTodoRequestVo) {
    // create
    if (requestVo.todo !== undefined) {
        const createdTodo = await client.create({_type: 'todo', ...requestVo.todo});
        return await client
            .transaction()
            .patch(requestVo.groupId, (task) =>
                task
                    .setIfMissing({todos: []})
                    .append('todos', [{ _type: 'reference', _ref: createdTodo._id}])
            )
            .commit({autoGenerateArrayKeys: true});
    } else {
        // edit
        return await client
            .patch(requestVo._id!)
            .set({[requestVo.editTargetField]: requestVo.editTargetValue})
            .commit();
    }
}

export async function deleteTaskTodo(taskId: string, todoId: string) {
    await client.transaction()
        .patch(taskId, patch => patch.unset([`todos[_ref == "${todoId}"]`]))
        .commit();

    return client.delete(todoId);
}

