import React from 'react';
import {BiWindow} from "react-icons/bi";
import {buttons} from "polished";

interface TaskTodoWindowButtonProps {
    id: string;
}

function TaskTodoWindowButton({id}: TaskTodoWindowButtonProps) {
    return (
        <button
            className='relative z-100 cursor-pointer mr-auto'
            onClick={() => console.log("todo Id:  ", id)}
        >
            <BiWindow size={22} className='hover:text-gray-dark-3'/>
        </button>
    );
}

export default TaskTodoWindowButton;