'use client';

import React, {Dispatch, SetStateAction, useState} from 'react';
import TaskTodoTool from "@/components/taskDetailView/taskTodo/TaskTodoTool";
import {formatDateToStr} from "@/utils/common";
import {DateFormat} from "@/utils/constant";
import Todo from "../../../../sanity-studio/schemas/todo";
import {TaskTodoRequestVo} from "@/utils/types";
import {useOpenTask} from "@/context/OpenTaskContext";
import {useCreateTaskTodo} from "@/hooks/useCreateTaskTodo";
import TaskTodoAddInput from "@/components/taskDetailView/taskTodo/TaskTodoAddInput";

interface TaskTodoAddItemProps {
    setIsOpen:Dispatch<SetStateAction<boolean>>;
}

function TaskTodoAddItem({setIsOpen}:TaskTodoAddItemProps) {
    const [showTodoTool, setShowTodoTool] = useState(false);
    const [todoContents, setTodoContents] = useState('');
    const {currentTaskId} = useOpenTask();
    const {createTaskTodo} = useCreateTaskTodo();

    function onBlurHandler() {
        const today = formatDateToStr(new Date, DateFormat.YMD_DASH);
        const user = { // todo - 실제 user 객체 넣을것
            _id: 'testUser',
            name: 'EUNSUN',
            userName: 'esKim',
            phone: '010111111111',
            createdAt: today
        }

        const todo = {
            groupId: currentTaskId
            , contents: todoContents
            , createdBy: user
            , updateDate: today
        } as Todo;

        createTaskTodo({groupId: currentTaskId, todo} as TaskTodoRequestVo);
        setIsOpen(false);
        setTodoContents('');
    }

    return (
        <div
            className='pl-16 relative'
            onMouseOver={() => setShowTodoTool(true)}
            onMouseLeave={() => setShowTodoTool(false)}
            onBlur={onBlurHandler}
        >
            {showTodoTool && <TaskTodoTool/>}
            <TaskTodoAddInput todoContents={todoContents} onChangeHandler={(v:string) => setTodoContents(v)} isCheckDisabled={true}/>
        </div>
    );
}

export default TaskTodoAddItem;