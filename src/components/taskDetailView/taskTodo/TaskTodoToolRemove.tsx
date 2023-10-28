import React from 'react';
import {useRecoilValue} from "recoil";
import {currentTaskStateStore, currentTaskTodoStateStore} from "@/store";
import {MdRemove} from "react-icons/md";
import {useDeleteTaskTodo} from "@/hooks/useDeleteTaskTodo";


function TaskTodoToolRemove() {
    const {currentTaskId} = useRecoilValue(currentTaskStateStore);
    const {currentTaskTodoId, currentTaskTodo} = useRecoilValue(currentTaskTodoStateStore);
    const { deleteTaskTodo} = useDeleteTaskTodo();

    function deleteTaskTodoItem() {
        console.log("currentTaskTodo: ",currentTaskTodo);
        if(confirm('todo를 삭제하시겠습니까?')){
            deleteTaskTodo({taskId:currentTaskId, todoId: currentTaskTodoId});
        }
    }

    return (
        <button className='hoverColorChange-neutral-light-1' onClick={() => deleteTaskTodoItem()}>
            <MdRemove/>
        </button>

    );
}

export default TaskTodoToolRemove;