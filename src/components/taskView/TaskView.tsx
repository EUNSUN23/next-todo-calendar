'use client';
import React from 'react';
import TaskViewHeader from "@/components/taskView/TaskViewHeader";
import TaskViewMain from "@/components/taskView/TaskViewMain";
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