'use client';
import React from 'react';
import {RiAddLine} from "react-icons/ri";
import TaskTodoAddForm from "@/components/taskDetailView/taskTodoAdd/TaskTodoAddForm";

// TODO 현재 task todo 목록 렌더링해서 보여주기
// TODo button 클릭시 현재있는 form으로 새 task todo todo 생성해서 저장
// - 현재 taskid로 todo 생성 & 저장
// todo 생성&저장 완료하면 현재 TaskTodoAddForm 제거하고 새로 빈 TaskTodoAddForm 생성
function TaskTodoAdd() {

    return (
        <>
            <TaskTodoAddForm/>
            <div className='pl-16'>
                <button
                    className='w-full flex items-center space-x-1 py-2 px-1 text-[1.65rem] leading-[2.15rem] text-neutral-dark hoverColorChange-neutral-light-1'>
                    <RiAddLine/>
                    <span>업무 목록 추가</span>
                </button>
            </div>
        </>
    );
}

export default TaskTodoAdd;