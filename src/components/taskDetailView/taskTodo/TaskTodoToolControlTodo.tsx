import React from 'react';
import {PiDotsSixVerticalBold} from "react-icons/pi";
import {useRecoilValue} from "recoil";
import {currentTaskTodoStateStore} from "@/store";

function TaskTodoToolControlTodo() {
    const {currentTaskTodoId} = useRecoilValue(currentTaskTodoStateStore);
    function onClickControlTodo(){
        console.log("onclick contro toto, id: ",currentTaskTodoId);
    }

    return (
        <button
            className='hoverColorChange-neutral-light-1'
            onClick={onClickControlTodo}
        >
            <PiDotsSixVerticalBold/>
        </button>
    );
}

export default TaskTodoToolControlTodo;