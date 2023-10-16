'use client';
import React from 'react';
import TaskItem from "@/components/TaskItem";
import {useTasks} from "@/hooks/useTasks";

function TaskViewMain() {

    const {tasks, isLoading} = useTasks();
    if(isLoading) return <h3>loading</h3> // todo loading bar 추가

    return (
        <section className='description'>
            <ul className='pl-4'>
                {tasks.map(v => <TaskItem key={v._id} task={v}/>)}
            </ul>
        </section>
    );
}

export default TaskViewMain;