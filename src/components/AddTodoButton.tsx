import React from 'react';
import {RiAddLine} from "react-icons/ri";

function AddTodoButton() {
    return (
        <button className='w-full flex items-center space-x-1 py-2 px-1 text-[1.65rem] leading-[2.15rem] text-[var(--color-neutral-dark)] hover:bg-[var(--color-neutral-light-1)] hover:border hover:border-[var(--color-neutral-light-1)] hover:rounded hover:m-[-1px]'>
            <RiAddLine />
            <span>업무 목록 추가</span>
        </button>
    );
}

export default AddTodoButton;