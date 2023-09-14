import {useQuery} from "@tanstack/react-query";
import {getTaskById} from "@/service/task";
import {Task} from "@/utils/types";

type TaskResponse = {
    task: Task,
    isLoading: boolean,
    error: Error
}
export function useTask(taskId:string):TaskResponse{
    const {task, isLoading, error} = useQuery({
        queryKey:['task'],
        queryFn: () => getTaskById(taskId)
    });

    return {task, isLoading, error} as TaskResponse;
}