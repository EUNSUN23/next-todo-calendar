'use client';
import React from 'react';
import {Todo} from "@/utils/types";
import TaskTodoTool from "@/components/taskDetailView/taskTodo/TaskTodoTool";
import TaskTodoInput from "@/components/taskDetailView/taskTodo/TaskTodoInput";
import TaskTodoWindowButton from "@/components/taskDetailView/taskTodo/TaskTodoWindowButton";
import {useRecoilState} from "recoil";
import {currentTaskTodoStateStore} from "@/store";


type Props = {
    todo: Todo;
}

export function TaskTodoItem({todo}: Props) {
    const [{isOnHover, currentTaskTodoId}, setCurrentTaskTodo] = useRecoilState(currentTaskTodoStateStore);
    const showTools = isOnHover && todo._id === currentTaskTodoId;

    function onMouseOverHandler(e) {
        e.stopPropagation();
        setCurrentTaskTodo({currentTaskTodoId: todo._id!, currentTaskTodo: todo, isOnHover: true});

    }

    const windowButton = showTools ? <TaskTodoWindowButton todo={todo}/> : <></>;

    return (
        <div
            className={`w-full flex items-center relative`}
            onMouseOver={onMouseOverHandler}
        >
            <TaskTodoTool showTools={showTools}/>
            <TaskTodoInput initContents={todo?.contents || ''}>
                {windowButton}
            </TaskTodoInput>
        </div>
    );
}
