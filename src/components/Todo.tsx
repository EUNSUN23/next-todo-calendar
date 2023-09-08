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
    return (
        <li className='flex justify-center space-x-4 text-2xl text-[var(--color-gray-dark)] font-semibold'>
                              <span className='flex'>
                                  <CheckSquare id='todo1'/>
                                  {task.description}
                              </span>
            <Badge color='red' size='sm' text='D-5'/>
        </li>
    );
}

export default Todo;