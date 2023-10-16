'use client';
import React from 'react';
import {Task} from "@/utils/types";
import CheckSquare from "@/components/CheckSquare";
import Badge from "@/components/Badge";
import {useRecoilState, useResetRecoilState} from "recoil";
import {currentTaskStateStore} from "@/store";

type Props = {
    task: Task;
}

function TaskItem({task}: Props) {
    const [{currentTaskId, currentTask}, setCurrentTask] = useRecoilState(currentTaskStateStore);
    const resetCurrentTask = useResetRecoilState(currentTaskStateStore);
    console.log("task: ", currentTask);

    // todo - description클릭시 task 상세 페이지 open..

    function onClickTodoItemHandler() {
        if (currentTaskId === task._id) resetCurrentTask();
        else setCurrentTask({currentTask:task, currentTaskId:task._id});
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

export default TaskItem;