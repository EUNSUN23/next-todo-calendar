'use client';
import React from 'react';
import TaskView from "@/components/TaskView";
import {useCurrentTask} from "@/context/CurrentTaskContext";
import TaskDetailView from "@/components/TaskDetailView";


function TaskSection() {
    const {isOpen} = useCurrentTask();

    const fullDisplay = "xl:basis-[850px] flex max-lg:flex-col";
    const todoDisplay = "lg:basis-[400px] md:basis-[250px]";

    return (
        <>
            <section className={`basis-full ${isOpen ? fullDisplay : todoDisplay} `}>
                <TaskView />
                <TaskDetailView/>
            </section>
        </>
    );
}


export default TaskSection;