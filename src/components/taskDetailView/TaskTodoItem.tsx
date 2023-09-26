'use client';
import React, {useState} from 'react';
import CustomCheckbox from "@/components/ui/CustomCheckbox";
import CustomInput from "@/components/ui/CustomInput";
import {Todo} from "@/utils/types";
import {BiWindow} from "react-icons/bi";
import TaskTodoTool from "@/components/taskDetailView/taskTodoTool/TaskTodoTool";

// TODO 1-2. dot 클릭시 다음 항목 나오게 하기 - 삭제, todo 할당하기, 타입 변경(todo <-> note 아이콘으로.)
// TODO 2. + 클릭시 sub 업무/note form 생성
// TODO 2-1. 업무목록 추가 버튼 클릭시 위로 form 추가.
// TODO 4. 처음 상태는 input에 focus 된채로, focus 사라지면 그대로 현재 Task의 todo에 추가. (제목 없으면 '제목 없음' 으로)
// TODO 5. 현재 task에 todo 생성(currentTaskId이용) 로직 - groupId(currTaskid), contents(not require), createdBy, updateDate, assignee(user)
// TODO 6. 수정후에는 마우스 hover시

type Props = {
    todo?: Todo;
}

function TaskTodoItem({todo}: Props) {
    const [showTodoTool, setShowTodoTool] = useState(false);

    console.log("todo: ", todo);

    return (
        <div
            className='pl-16 relative'
            onMouseOver={() => setShowTodoTool(true)}
            onMouseLeave={() => setShowTodoTool(false)}
        >
            <TaskTodoTool isShow={showTodoTool}/>
            <div className={`w-full flex space-x-4 items-center text-3xl mx-3 p-1 ${todo !== undefined && 'hoverColorChange-neutral-light-1'}`}>
                <CustomCheckbox disabled={todo == undefined}/>
                {
                    todo == undefined ?
                        <CustomInput/>
                        :
                        <div className='flex items-center space-x-1'>
                            <div className='whitespace-nowrap'>{todo.contents}</div>
                            {todo.contents.length > 0 &&
                                <BiWindow
                                    size={22}
                                    className='cursor-pointer opacity-0 hover:opacity-100 transition opacity ease-in-out duration-100'/>}
                        </div>
                }
            </div>
        </div>
    );
}

export default TaskTodoItem;