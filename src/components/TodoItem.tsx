'use client';
import React from 'react';
import {Task} from "@/utils/types";
import CheckSquare from "@/components/CheckSquare";
import Badge from "@/components/Badge";
import {useCurrentTask} from "@/context/CurrentTaskContext";

type Props = {
    task:Task;
}
function TodoItem({task}:Props) {
    const {openCurrentTask, closeCurrentTask, isOpen} = useCurrentTask();
    console.log("task: ",task);
    // todo - description클릭시 task 상세 페이지 open..
    return (
        <li className='flex justify-center space-x-4 text-2xl text-[var(--color-gray-dark)] font-semibold'>
              <span className='flex pointer' onClick={() => isOpen ? closeCurrentTask() : openCurrentTask(task)}>
                  <CheckSquare id='todo1'/>
                  <span>{task.description}</span>
              </span>
            <Badge color='red' size='sm' text='D-5'/>
        </li>
    );
}

export default TodoItem;