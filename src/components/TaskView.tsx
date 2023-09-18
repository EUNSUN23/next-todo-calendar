'use client';
import React from 'react';
import TaskViewHeader from "@/components/TaskViewHeader";
import TaskViewMain from "@/components/TaskViewMain";
import {useCurrentTask} from "@/context/CurrentTaskContext";


function TaskView() {
    const {isOpen} = useCurrentTask()!;

    return (
        <section className={`${isOpen} ? 'basis-[230px]'`}>
            <TaskViewHeader/>
            <TaskViewMain/>
        </section>
    );
}

export default TaskView;