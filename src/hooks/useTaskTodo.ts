'use client';

import {Todo} from "@/utils/types";
import {useQuery} from "@tanstack/react-query";
import {getTaskTodoById} from "@/service/task";

type TaskTodoResponse = {
    todos : Todo[],
    isLoading: boolean,
    error: Error
}
export function useTaskTodo(taskId:string):TaskTodoResponse{
    const {data:todos, isLoading, error} = useQuery({
        queryKey:['taskTodo'],
        queryFn: () => getTaskTodoById({groupId:taskId})
    });

    return {todos, isLoading, error} as TaskTodoResponse;
}