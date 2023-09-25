'use client';
import React, {useState} from 'react';
import CustomCheckbox from "@/components/ui/CustomCheckbox";
import CustomInput from "@/components/ui/CustomInput";
import TaskTodoToolAddSub from "@/components/taskDetailView/taskTodoTool/TaskTodoToolAddSub";
import TaskTodoToolControlTodo from "@/components/taskDetailView/taskTodoTool/TaskTodoToolControlTodo";

// TODO 1-2. dot 클릭시 다음 항목 나오게 하기 - 삭제, todo 할당하기, 타입 변경(todo <-> note 아이콘으로.)
// TODO 2. + 클릭시 sub 업무/note form 생성
// TODO 2-1. 업무목록 추가 버튼 클릭시 위로 form 추가.
// TODO 4. 처음 상태는 input에 focus 된채로, focus 사라지면 그대로 현재 Task의 todo에 추가. (제목 없으면 '제목 없음' 으로)
// TODO 5. 현재 task에 todo 생성(currentTaskId이용) 로직 - groupId(currTaskid), contents(not require), createdBy, updateDate, assignee(user)
// TODO 6. 수정후에는 마우스 hover시

function TaskTodoItem() {
    const [showTodoTool, setShowTodoTool] = useState(false);

    return (
        <div className='pl-16 relative' onMouseOver={() => setShowTodoTool(true)} onMouseLeave={() => setShowTodoTool(false)}>
            {
                showTodoTool ?
                    <div
                        className='absolute top-1/2 translate-y-[-50%] left-0 flex text-3xl text-neutral-dark '>
                        <TaskTodoToolAddSub/>
                        <TaskTodoToolControlTodo/>
                    </div>
                    : null
            }

            <div className='w-full text-3xl flex items-center mx-2'>
                <CustomCheckbox onChangeHandler={(e) => console.log(e.target)}/>
                <CustomInput/>
            </div>
        </div>
    );
}

export default TaskTodoItem;