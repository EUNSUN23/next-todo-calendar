import {ClientConfig} from "next-sanity";
import {formatDateToStr} from "@/utils/common";
import {DateFormat} from "@/utils/constant";
import {TaskEditRequestVo} from "@/utils/types";
import {createClient} from "@sanity/client";

const client = createClient({
    projectId: "1jtekrqc",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false
} as ClientConfig);

/**
 * groupId로 task 상세 조회
 * @param taskId
 */
export async function getTaskById(taskId:string){
    const query = `*[_type == "task" && groupId == "${taskId}"]{
        groupId, description, start, end, level, finish,
        notes[]->, todos[]->, createdBy->
    }[0]`;

    return await client.fetch(query);
}


/**
 * 이번달 task 목록 조회
 */
export async function getTasks(){
     const date = new Date();
     const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
     const endDate = formatDateToStr(lastDayOfMonth, DateFormat.YMD_DASH);

    const query = `*[_type == "task" && start <= "${endDate} && !finish"]{
        groupId, description, start, end, level, finish
    }`;
    const res = await client.fetch(query);

    // 데이터 가공
    // const data = await res.json();
    for(const task of res){
        task.title = task.description;
        switch(task.level){
            case '1':
                task.color = 'var(--color-minor)';
                break;
            case '2':
                task.color = 'var(--color-common)';
                break;
            case '3':
                task.color = 'var(--color-important)';
                break;
            default:
                task.color = 'var(--color-common)';
        }
    }

    return res;
}

export async function editTaskById(requestVo:TaskEditRequestVo){
    return  await client.patch(requestVo.groupId) // Document ID to patch
        .set(requestVo) // Shallow merge
        .commit(); // Perform the patch and return a promise
        // .then((updatedBike) => {
        //     console.log('Hurray, the bike is updated! New document:')
        //     console.log(updatedBike)
        // })
        // .catch((err) => {
        //     console.error('Oh no, the update failed: ', err.message)
        // })
}

