'use client';
import React from 'react';
import {Task} from "@/utils/types";
import CheckSquare from "@/components/CheckSquare";
import Badge from "@/components/Badge";
import {CurrentTaskContextValue, useOpenTask} from "@/context/OpenTaskContext";

type Props = {
    task: Task;
}

function TodoItem({task}: Props) {
    const {
        openCurrentTask,
        closeCurrentTask,
        isOpen
    }:CurrentTaskContextValue = useOpenTask()!;
    console.log("task: ", task);

    // todo - description클릭시 task 상세 페이지 open..

    function onClickTodoItemHandler() {
        if (isOpen) closeCurrentTask();
        else openCurrentTask(task._id);
    }

    return (
        <li className='flex justify-center space-x-4 text-2xl text-gray-dark font-semibold'>
              <span className='flex pointer' onClick={onClickTodoItemHandler}>
                  <CheckSquare id='todo1'/>
                  <span>{task.description}</span>
              </span>
            <Badge color='red' size='sm' text='D-5'/>
        </li>
    );
}

export default TodoItem;