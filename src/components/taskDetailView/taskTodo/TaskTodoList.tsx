'use client';
import React, {useState} from 'react';
import {RiAddLine} from "react-icons/ri";
import TaskTodoAddItem from "@/components/taskDetailView/taskTodo/TaskTodoAddItem";
import {useRecoilValue} from "recoil";
import {currentTaskStateStore} from "@/store";
import {useTaskTodo} from "@/hooks/useTaskTodo";
import {TaskTodoItem} from "@/components/taskDetailView/taskTodo/TaskTodoItem";


// todo - note는 todo에 속하게 둘건지, 따로 둘건지 ?
function TaskTodoList() {
    const [showTaskTodoAddElement, setShowTaskTodoAddElement] = useState(false);
    const {currentTaskId} = useRecoilValue(currentTaskStateStore);
    const {todos} = useTaskTodo(currentTaskId);

    return (
        <div className='flex-col mt-5'>
            {showTaskTodoAddElement && <TaskTodoAddItem setIsOpen={setShowTaskTodoAddElement}/>}
            {todos?.map((v) => <TaskTodoItem key={v._id} todo={v} taskId={currentTaskId}/>)}
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