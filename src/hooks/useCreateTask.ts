import {useMutation} from "@tanstack/react-query";
import {useRef} from "react";
import {Task} from "@/utils/types";
import {toast, Zoom} from "react-toastify";
import {createTask as createTaskApi} from "@/service/task";


export function useCreateTask() {
    const toastId = useRef('');

    const {isLoading:isCreating, mutate:createTask} = useMutation({
        mutationFn: async (param:Task) => {
            toastId.current = toast.loading("Task 생성 중입니다.", {transition:Zoom, theme:'light'}) as string;
            await createTaskApi(param);
        },
        onError:() => {
            toast.error("Task 생성 중 오류가 발생했습니다.",{autoClose:false, hideProgressBar:true, transition:Zoom, theme:'light'});
        },
        onSettled:() => {
            toast.dismiss(toastId.current);
        }

    });

    return {isCreating, createTask};
}