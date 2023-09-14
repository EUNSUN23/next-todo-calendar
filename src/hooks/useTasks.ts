import {useQuery} from "@tanstack/react-query";
import {getTasks} from "@/service/task";
import {Task} from "@/utils/types";

type TasksResponse = {
    tasks : Task[],
    isLoading: boolean,
    error : Error
}

export function useTasks():TasksResponse{
    const {data:tasks, isLoading, error} = useQuery({
        queryKey:['tasks'],
        queryFn: getTasks
    });

    return {tasks, isLoading, error} as TasksResponse;
}