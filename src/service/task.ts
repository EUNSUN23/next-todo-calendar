import {ClientConfig, createClient} from "next-sanity";
import {DateFormat, formatDateToStr} from "@/utils/common";

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
    const query = `*[_type == "task" && groupId == ${taskId}]{
        groupId, description, start, end, level, finish
        notes[]->, todos[]->, createdBy->
    }`;

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

