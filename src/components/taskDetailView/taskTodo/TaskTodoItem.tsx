'use client';
import React, {useState} from 'react';
import CustomCheckbox from "@/components/ui/CustomCheckbox";
import {Todo} from "@/utils/types";
import TaskTodoTool from "@/components/taskDetailView/taskTodo/TaskTodoTool";
import {LuFileEdit} from "react-icons/lu";

// TODO 1-2. dot 클릭시 다음 항목 나오게 하기 - 삭제, todo 할당하기, 타입 변경(todo <-> note 아이콘으로.)
// TODO 2. + 클릭시 sub 업무/note form 생성
// TODO 2-1. 업무목록 추가 버튼 클릭시 위로 form 추가.
// TODO 4. 처음 상태는 input에 focus 된채로, focus 사라지면 그대로 현재 Task의 todo에 추가. (제목 없으면 '제목 없음' 으로)
// TODO 5. 현재 task에 todo 생성(currentTaskId이용) 로직 - groupId(currTaskid), contents(not require), createdBy, updateDate, assignee(user)
// TODO 6. 수정후에는 마우스 hover시

type Props = {
    todo?: Todo;
    taskId: string;
}

export function TaskTodoItem({todo, taskId}: Props) {
    const [showTodoTool, setShowTodoTool] = useState(false);

    function onMouseOverHandler(e) {
        e.stopPropagation();
        setShowTodoTool(true);
    }

    function onMouseLeaveHandler(e) {
        e.stopPropagation();
        setShowTodoTool(false);
    }

    return (
        <div
            className='flex items-center pl-16 relative'
            onMouseOver={onMouseOverHandler}
            onMouseLeave={onMouseLeaveHandler}
        >
            {showTodoTool && <TaskTodoTool/>}
            <div
                className='w-full flex space-x-4 items-center text-3xl mx-3 p-1 hoverColorChange-neutral-light-1'>
                <CustomCheckbox disabled={false}/>
                <div className='flex items-center space-x-3'>
                    <div className='whitespace-nowrap text-gray-dark-3'>{todo?.contents}</div>
                    {showTodoTool && <LuFileEdit size={22}
                                                 className='cursor-pointer border border-[#dbdbdb] bg-white shadow-sm text-neutral-dark p-[2px] rounded-md'/>}
                </div>

            </div>
        </div>
    );
}

