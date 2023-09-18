import {TaskEditRequestVo} from "@/utils/types";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {editTaskById as editTaskByIdApi} from "@/service/task";
import {Slide, toast, Zoom} from "react-toastify";
import {useRef} from "react";
import 'react-toastify/dist/ReactToastify.css';


export function useEditTask() {
    const queryClient = useQueryClient();

    // const editToastId = useRef('');
    //     if (isEditing) {
    //         editToastId.current = toast.loading("Task를 수정중입니다.") as string;
    //     } else {
    //         toast.dismiss(editToastId.current);
    //     }

    const editToastId = useRef('');

    const {isLoading: isEditing, mutate: editTaskById, error} = useMutation({
        mutationFn: async (requestVo: TaskEditRequestVo) => {
            editToastId.current = toast.loading("Task 수정 중입니다.",{transition:Zoom, theme:'light'}) as string;
            await editTaskByIdApi(requestVo);
            toast.dismiss(editToastId.current);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ // 캐시데이터 invalidate함으로써 데이터 refetch하도록.
                queryKey: ['task']
            });
            toast.dismiss(editToastId.current);
        },
        onError: err => {
            console.error(err.message)
            // toast.dismiss(editToastId.current);
            // editToastId.current = '';
            toast.error("Task 수정 중 오류가 발생했습니다.", {autoClose:false, hideProgressBar:true, transition:Zoom, theme:'light'});
            toast.dismiss(editToastId.current);
        }
    })

    return {isEditing, editTaskById}
}