'use client';
import React, {useState} from 'react';
import {ReactChildNode} from "@/utils/types";
import {RiAddLine} from "react-icons/ri";
import TaskTodoAddItem from "@/components/taskDetailView/taskTodo/TaskTodoAddItem";


// todo - note는 todo에 속하게 둘건지, 따로 둘건지 ?
function TaskTodoList({children}: ReactChildNode) {
    const [showTaskTodoAddElement, setShowTaskTodoAddElement] = useState(false);

    return (
        <div className='flex-col'>
            {showTaskTodoAddElement && <TaskTodoAddItem setIsOpen={setShowTaskTodoAddElement}/>}
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