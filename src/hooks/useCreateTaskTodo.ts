'use client';

import {useMutation} from "@tanstack/react-query";
import {toast} from "react-toastify";
import {TaskTodoRequestVo} from "@/utils/types";


export function useCreateTaskTodo(){
    const {mutate: createTaskTodo, isLoading:isCreating} = useMutation({
        mutationFn: async (requestVo:TaskTodoRequestVo) => {
            toast.loading('Todo 생성 중입니다.');
            await createTaskTodo(requestVo);
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