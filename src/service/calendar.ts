import {ClientConfig, createClient} from "next-sanity";
import {DateFormat, formatDateToStr} from "@/utils/common";

const client = createClient({
    projectId: "1jtekrqc",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false
} as ClientConfig);

export async function getTasks(){
     const date = new Date();
     const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
     const endDate = formatDateToStr(lastDayOfMonth, DateFormat.YMD_DASH);

    const query = `*[_type == "task" && start <= "${endDate} && !finish"]{groupId, description, start, end, level, finish}`;
    const tasks = await client.fetch(query);

    return tasks;
}

