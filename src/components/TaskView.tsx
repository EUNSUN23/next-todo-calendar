'use client';
import React from 'react';
import TaskViewHeader from "@/components/TaskViewHeader";
import TaskViewMain from "@/components/TaskViewMain";
import {useOpenTask} from "@/context/OpenTaskContext";


function TaskView() {
    const {isOpen} = useOpenTask()!;

    return (
        <section className={`${isOpen} ? 'basis-[230px]'`}>
            <TaskViewHeader/>
            <TaskViewMain/>
        </section>
    );
}

export default TaskView;