'use client';
import React from 'react';
import TaskViewHeader from "@/components/TaskViewHeader";
import TaskViewMain from "@/components/TaskViewMain";
import {currentTaskStateStore} from "@/store";
import {useRecoilValue} from "recoil";


function TaskView() {
    const {currentTaskId} = useRecoilValue(currentTaskStateStore);

    return (
        <section className={`${currentTaskId} ? 'basis-[230px]'`}>
            <TaskViewHeader/>
            <TaskViewMain/>
        </section>
    );
}

export default TaskView;