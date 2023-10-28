'use client';
import React from 'react';
import TaskView from "@/components/taskView/TaskView";
import {useOpenTask} from "@/context/OpenTaskContext";
import TaskDetailView from "@/components/taskDetailView/TaskDetailView";


function TaskSection() {
    const {isOpen, currentTaskId} = useOpenTask()!;

    const fullDisplay = "xl:basis-[850px] flex max-lg:flex-col";
    const todoDisplay = "lg:basis-[400px] md:basis-[250px]";

    return (
        <>
            <section className={`basis-full ${isOpen ? fullDisplay : todoDisplay} `}>
                <TaskView />
                {(isOpen && currentTaskId) && <TaskDetailView currentTaskId={currentTaskId}/>}
            </section>
        </>
    );
}


export default TaskSection;