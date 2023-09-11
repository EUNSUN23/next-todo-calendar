'use client';
import React from 'react';
import {Task} from "@/utils/types";
import CheckSquare from "@/components/CheckSquare";
import Badge from "@/components/Badge";

type Props = {
    task:Task;
}
function Todo({task}:Props) {
    console.log("task: ",task);
    // todo - description클릭시 task 상세 페이지 open..
    return (
        <li key={task.groupId} className='flex justify-center space-x-4 text-2xl text-[var(--color-gray-dark)] font-semibold'>
              <span className='flex'>
                  <CheckSquare id='todo1'/>
                  <span>{task.description}</span>
              </span>
            <Badge color='red' size='sm' text='D-5'/>
        </li>
    );
}

export default Todo;