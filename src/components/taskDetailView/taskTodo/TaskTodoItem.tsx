'use client';
import React from 'react';
import {Todo} from "@/utils/types";
import TaskTodoTool from "@/components/taskDetailView/taskTodo/TaskTodoTool";
import TaskTodoInput from "@/components/taskDetailView/taskTodo/TaskTodoInput";
import TaskTodoWindowButton from "@/components/taskDetailView/taskTodo/TaskTodoWindowButton";
import {useRecoilState, useResetRecoilState} from "recoil";
import {currentTaskTodoStateStore} from "@/store";

// TODO 1-2. dot 클릭시 다음 항목 나오게 하기 - 삭제, todo 할당하기, 타입 변경(todo <-> note 아이콘으로.)
// TODO 2. + 클릭시 sub 업무/note form 생성
// TODO 2-1. 업무목록 추가 버튼 클릭시 위로 form 추가.
// TODO 4. 처음 상태는 input에 focus 된채로, focus 사라지면 그대로 현재 Task의 todo에 추가. (제목 없으면 '제목 없음' 으로)
// TODO 5. 현재 task에 todo 생성(currentTaskId이용) 로직 - groupId(currTaskid), contents(not require), createdBy, updateDate, assignee(user)
// TODO 6. 수정후에는 마우스 hover시

type Props = {
    todo: Todo;
}

export function TaskTodoItem({todo}: Props) {
    const [{isOnHover, currentTaskTodoId}, setCurrentTaskTodo] = useRecoilState(currentTaskTodoStateStore);
    const resetCurrentTaskTodo = useResetRecoilState(currentTaskTodoStateStore);
    const showTools = isOnHover && todo._id === currentTaskTodoId;

    function onMouseOverHandler(e) {
        e.stopPropagation();
        setCurrentTaskTodo({currentTaskTodoId:todo._id!, currentTaskTodo:todo, isOnHover:true});

    }

    function onMouseLeaveHandler(e) {
        e.stopPropagation();
        resetCurrentTaskTodo();
    }

    const windowButton =  showTools ? <TaskTodoWindowButton todo={todo}/> : <></>;

    return (
        <div
            className='flex items-center pl-16 relative'
            onMouseOver={onMouseOverHandler}
            onMouseLeave={onMouseLeaveHandler}
        >
            {showTools && <TaskTodoTool/>}
            <TaskTodoInput initContents={todo?.contents || ''}>
                {windowButton}
            </TaskTodoInput>
        </div>
    );
}

