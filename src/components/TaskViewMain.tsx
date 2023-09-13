'use client';
import React from 'react';
import TodoItem from "@/components/TodoItem";
import {useTasks} from "@/hooks/useTasks";

function TaskViewMain() {

    const {tasks, isLoading, error} = useTasks();
    if(isLoading) return <h3>loading</h3> // todo loading bar 추가

    return (
        <section className='description'>
            <ul className='pl-4'>
                {tasks.map(v => <TodoItem key={v.groupId}  task={v}/>)}
            </ul>
        </section>
    );
}

export default TaskViewMain;