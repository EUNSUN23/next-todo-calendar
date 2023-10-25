'use client';

import React from 'react';
import TaskTodoList from "@/components/taskDetailView/taskTodo/TaskTodoList";
import TaskTodoFilter from "@/components/taskDetailView/taskTodo/TaskTodoFilter";
import {useRecoilValue} from "recoil";
import TaskTodoDetail from "@/components/taskDetailView/taskTodo/TaskTodoDetail";
import {taskTodoTabOpenStateSelector} from "@/store/CurrentTaskTodoStateStore";

function TaskTodoTabContents() {
    const {isTodoTabOpen} = useRecoilValue(taskTodoTabOpenStateSelector);

    console.log("tasktodoTabContents, isTodoTabOpen: ", isTodoTabOpen);

    return (
        isTodoTabOpen ?
            <TaskTodoDetail/> :
            <>
                <TaskTodoFilter/>
                <TaskTodoList/>
            </>
    );
}

export default TaskTodoTabContents;