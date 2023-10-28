'use client';
import React from 'react';
import CalendarSection from "@/components/CalendarSection";
import TaskView from "@/components/taskView/TaskView";
import TaskDetailView from "@/components/taskDetailView/TaskDetailView";
import {useRecoilState} from "recoil";
import {currentTaskStateStore} from "@/store/CurrentTaskStateStore";
import {DefaultTask} from "@/utils/DefaultTask";

function MainLayout() {
    const [{currentTask}, setCurrentTask] = useRecoilState(currentTaskStateStore);

    const fullDisplay = "lg:basis-[400px] md:basis-[250px]";
    const todoDisplay = "xl:basis-[850px] flex max-lg:flex-col";

    return (
        <>
            <section className={`basis-full ${currentTask instanceof DefaultTask ? fullDisplay : todoDisplay} `}>
                <TaskView/>
                {!(currentTask instanceof DefaultTask) && <TaskDetailView />}
            </section>
            <CalendarSection/>
        </>
    );
}

export default MainLayout;