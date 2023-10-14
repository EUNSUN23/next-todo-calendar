import React from 'react';
import {BiWindow} from "react-icons/bi";

interface TaskTodoWindowButtonProps {
    id:string;
}

function TaskTodoWindowButton({id}:TaskTodoWindowButtonProps) {
    return (
       <BiWindow size={22}
                 className='cursor-pointer mr-auto'
                 onClick={() => console.log("todo Id:  ",id)}
       />
    );
}

export default TaskTodoWindowButton;