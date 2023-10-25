import React from 'react';
import {PiDotsSixVerticalBold} from "react-icons/pi";

function TaskTodoToolControlTodo() {
    function onClickControlTodo({target}:MouseEvent){

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