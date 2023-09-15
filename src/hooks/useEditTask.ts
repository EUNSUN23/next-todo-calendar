import {TaskEditRequestVo} from "@/utils/types";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {editTaskById as editTaskByIdApi} from "@/service/task";

export function useEditTask() {
    const queryClient = useQueryClient();

    const {isLoading: isEditing, mutate: editTaskById} = useMutation({
        mutationFn: (requestVo: TaskEditRequestVo) => editTaskByIdApi(requestVo),
        onSuccess: () => {
            alert("Task가 성공적으로 수정 되었습니다.");
            queryClient.invalidateQueries({ // 캐시데이터 invalidate함으로써 데이터 refetch하도록.
                queryKey: ['task']
            });
        },
        onError: err => console.error(err.message)
    })

    return {isEditing, editTaskById}
}