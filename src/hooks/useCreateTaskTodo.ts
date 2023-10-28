'use client';

import {useMutation, useQueryClient} from "@tanstack/react-query";
import {toast} from "react-toastify";
import {TaskTodoRequestVo} from "@/utils/types";
import {createEditTaskTodo as createTaskTodoApi} from "@/service/task";


export function useCreateTaskTodo(){
    const queryClient = useQueryClient();
    const {mutate: createTaskTodo, isLoading:isCreating} = useMutation({
        mutationFn: async (requestVo:TaskTodoRequestVo) => {
            toast.loading('Todo 생성 중입니다.');
            await createTaskTodoApi(requestVo);
            await queryClient.invalidateQueries({
                queryKey:['taskTodo']
            });
        } ,
        onSuccess:() => {
            toast.dismiss();
        },
        onError:() =>{
            toast.dismiss();
            toast.error('Todo 생성중 에러가 발생했습니다.');
        }
    });

    return {createTaskTodo, isCreating};
}