'use client';

import React from 'react';
import TaskTodoList from "@/components/taskDetailView/taskTodo/TaskTodoList";
import TaskTodoFilter from "@/components/taskDetailView/taskTodo/TaskTodoFilter";
import {useRecoilValue} from "recoil";
import {currentTaskTodoTabSelector} from "@/store";
import TaskTodoDetail from "@/components/taskDetailView/taskTodo/TaskTodoDetail";

function TaskTodoTabContents() {
    const currentTaskTodoTab = useRecoilValue(currentTaskTodoTabSelector);

    return (
        currentTaskTodoTab.id === 'taskTodoList' ?
            <>
                <TaskTodoFilter/>
                <TaskTodoList/>
            </>
            : <TaskTodoDetail/>
    );
}

export default TaskTodoTabContents;