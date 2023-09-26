'use client';

import {Todo} from "@/utils/types";
import {useQuery} from "@tanstack/react-query";

type TaskTodoResponse = {
    todos : Todo[],
    isLoading: boolean,
    error: Error
}
export function useTaskTodo(taskId:string):TaskTodoResponse{
    const {data:todos, isLoading, error} = useQuery({
        queryKey:['taskTodo'],
        queryFn: () => getTaskTodoById(taskId)
    });

    return {todos, isLoading, error} as TaskTodoResponse;
}