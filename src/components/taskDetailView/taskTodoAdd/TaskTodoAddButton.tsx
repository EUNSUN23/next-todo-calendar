import React from 'react';
import {RiAddLine} from "react-icons/ri";

function TaskTodoAddButton() {
    return (
        <div className='pl-16'>
            <button
                className='w-full flex items-center space-x-1 py-2 px-1 text-[1.65rem] leading-[2.15rem] text-neutral-dark hoverColorChange-neutral-light-1'>
                <RiAddLine/>
                <span>업무 목록 추가</span>
            </button>
        </div>
    );
}

export default TaskTodoAddButton;