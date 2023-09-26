'use client';
import React, {useState} from 'react';
import {ReactChildNode, TaskTodoRequestVo} from "@/utils/types";
import {useCreateTaskTodo} from "@/hooks/useCreateTaskTodo";
import TaskTodoTool from "@/components/taskDetailView/taskTodo/TaskTodoTool";
import CustomCheckbox from "@/components/ui/CustomCheckbox";
import CustomInput from "@/components/ui/CustomInput";
import {RiAddLine} from "react-icons/ri";
import {formatDateToStr} from "@/utils/common";
import {DateFormat} from "@/utils/constant";
import Todo from "../../../../sanity-studio/schemas/todo";
import {useOpenTask} from "@/context/OpenTaskContext";


// todo - note는 todo에 속하게 둘건지, 따로 둘건지 ?
function TaskTodoList({children}: ReactChildNode) {
    const {currentTaskId} = useOpenTask();
    const {createTaskTodo} = useCreateTaskTodo();
    const [showTaskTodoAddElement, setShowTaskTodoAddElement] = useState(false);
    const [showTodoTool, setShowTodoTool] = useState(false);
    const [todoContents, setTodoContents] = useState('');

    function onChangeTodoInputHandler(value: string) {
        setTodoContents(value);
    }

    function onBlurTaskTodoItemAddHandler() {
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
        setShowTaskTodoAddElement(false);
        setTodoContents('');
    }

    return (
        <div className='flex-col'>
            {
                showTaskTodoAddElement &&
                <div
                    className='pl-16 relative'
                    onMouseOver={() => setShowTodoTool(true)}
                    onMouseLeave={() => setShowTodoTool(false)}
                    onBlur={onBlurTaskTodoItemAddHandler}
                >
                    {showTodoTool && <TaskTodoTool/>}
                    <div
                        className='w-full flex space-x-4 items-center text-3xl mx-3 p-1 hoverColorChange-neutral-light-1'>
                        <CustomCheckbox disabled={true}/>
                        <CustomInput todoContents={todoContents} onChangeHandler={onChangeTodoInputHandler}/>
                    </div>
                </div>
            }
            {children}
            <div className='pl-16'>
                <button
                    onClick={() => setShowTaskTodoAddElement(true)}
                    className='w-full flex items-center space-x-1 py-2 px-1 text-[1.65rem] leading-[2.15rem] text-neutral-dark hoverColorChange-neutral-light-1'>
                    <RiAddLine/>
                    <span>업무 목록 추가</span>
                </button>
            </div>
        </div>
    );
}

export default TaskTodoList;