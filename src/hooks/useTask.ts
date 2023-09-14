import {useQuery} from "@tanstack/react-query";
import {getTaskById} from "@/service/task";

export function useTask(taskId:string){
    const {data:task, isLoading, error} = useQuery({
        queryKey:['task'],
        queryFn: () => getTaskById(taskId)
    });

    return {task, isLoading, error};
}