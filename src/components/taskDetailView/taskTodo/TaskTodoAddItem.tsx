'use client';

import React, {Dispatch, SetStateAction, useState} from 'react';
import TaskTodoTool from "@/components/taskDetailView/taskTodo/TaskTodoTool";
import CustomCheckbox from "@/components/ui/CustomCheckbox";
import CustomInput from "@/components/ui/CustomInput";
import {formatDateToStr} from "@/utils/common";
import {DateFormat} from "@/utils/constant";
import Todo from "../../../../sanity-studio/schemas/todo";
import {TaskTodoRequestVo} from "@/utils/types";
import {useOpenTask} from "@/context/OpenTaskContext";
import {useCreateTaskTodo} from "@/hooks/useCreateTaskTodo";

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
            <div
                className='w-full flex space-x-4 items-center text-3xl mx-3 p-1 hoverColorChange-neutral-light-1'>
                <CustomCheckbox disabled={true}/>
                <CustomInput todoContents={todoContents} onChangeHandler={(v:string) => setTodoContents(v)}/>
            </div>
        </div>
    );
}

export default TaskTodoAddItem;