import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteTaskTodo as deleteTaskTodoApi} from "@/service/task";
import {useRef} from "react";
import {toast, Zoom} from "react-toastify";

export function useDeleteTaskTodo(){
    const queryClient = useQueryClient();

    const toastId = useRef('');

    const {isLoading:isDeleting, mutate:deleteTaskTodo} = useMutation({
        mutationFn: async (param:{taskId:string, todoId:string}) => {
            toastId.current = toast.loading('todo 삭제 중입니다',{transition:Zoom, theme:'light'}) as string;
            await deleteTaskTodoApi(param.taskId, param.todoId);
            toast.dismiss(toastId.current);
        },
        onSuccess:async () => {
            await queryClient.invalidateQueries({
                queryKey:['taskTodo']
            });
            toast.dismiss(toastId.current);
        },
        onError: err => {
            toast.error("todo 수정 중 오류가 발생했습니다.", {autoClose:false, hideProgressBar:true, transition:Zoom, theme:'light'});
            toast.dismiss(toastId.current);
        }
    });

    return {isDeleting, deleteTaskTodo};
}