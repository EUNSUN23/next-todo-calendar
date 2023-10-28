import {TaskEditRequestVo} from "@/utils/types";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {editTaskById as editTaskByIdApi} from "@/service/task";
import {toast, Zoom} from "react-toastify";
import {useRef} from "react";
import 'react-toastify/dist/ReactToastify.css';
import {useSetRecoilState} from "recoil";
import {currentTaskStateStore} from "@/store";


export function useEditTask() {
    const queryClient = useQueryClient();
    const setCurrentTask = useSetRecoilState(currentTaskStateStore);

    const editToastId = useRef('');

    const {isLoading: isEditing, mutate: editTaskById, error} = useMutation({
        mutationFn: async (requestVo: TaskEditRequestVo) => {
            editToastId.current = toast.loading("Task 수정 중입니다.",{transition:Zoom, theme:'light'}) as string;
            const res = await editTaskByIdApi(requestVo);
            toast.dismiss(editToastId.current);
            return res;
        },
        onSuccess: async (data) => {
            await queryClient.invalidateQueries({ // 캐시데이터 invalidate함으로써 데이터 refetch하도록.
                queryKey: ['task']
            });
            setCurrentTask({currentTaskId:data._id, currentTask:data});
            toast.dismiss(editToastId.current);
        },
        onError: err => {
            toast.error("Task 수정 중 오류가 발생했습니다.", {autoClose:false, hideProgressBar:true, transition:Zoom, theme:'light'});
            toast.dismiss(editToastId.current);
        }
    })

    return {isEditing, editTaskById}
}