'use client';
import React from 'react';
import {BiWindow} from "react-icons/bi";
import {Todo} from "@/utils/types";
import {useSetRecoilState} from "recoil";
import {taskTodoTabListStateStore} from "@/store";

interface TaskTodoWindowButtonProps {
    todo: Todo;
}

function TaskTodoWindowButton({todo}: TaskTodoWindowButtonProps) {
    const setTaskTodoTabList = useSetRecoilState(taskTodoTabListStateStore);

    function onClickTaskTodoWindowButtonHandler(){
        setTaskTodoTabList([{name:'업무 목록',id:'taskTodoList'},{name: todo.contents, id: todo._id!}]);
    }

    return (
        <button
            className='relative z-100 cursor-pointer mr-auto'
            onClick={onClickTaskTodoWindowButtonHandler}
        >
            <BiWindow size={22} className='hover:text-gray-dark-3'/>
        </button>
    );
}

export default TaskTodoWindowButton;