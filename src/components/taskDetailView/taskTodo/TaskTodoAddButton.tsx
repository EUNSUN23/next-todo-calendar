'use client';
import React from 'react';
import {RiAddLine} from "react-icons/ri";

type Props = {
    onClickHandler:() => void;
}
function TaskTodoAddButton({onClickHandler}:Props) {

    return (
        <div className='pl-16'>
            <button
                onClick={onClickHandler}
                className='w-full flex items-center space-x-1 py-2 px-1 text-[1.65rem] leading-[2.15rem] text-neutral-dark hoverColorChange-neutral-light-1'>
                <RiAddLine/>
                <span>업무 목록 추가</span>
            </button>
        </div>
    );
}

export default TaskTodoAddButton;