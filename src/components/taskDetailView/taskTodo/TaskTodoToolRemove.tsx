import React from 'react';
import {useRecoilValue} from "recoil";
import {currentTaskTodoStateStore} from "@/store";
import {MdRemove} from "react-icons/md";


function TaskTodoToolRemove() {
    const {currentTaskTodoId} = useRecoilValue(currentTaskTodoStateStore);

    function deleteTaskTodoItem(){
        console.log("delete, todoId: ",currentTaskTodoId);
    }

    return (
        <button className='hoverColorChange-neutral-light-1' onClick={() => deleteTaskTodoItem}>
            <MdRemove />
        </button>

    );
}

export default TaskTodoToolRemove;