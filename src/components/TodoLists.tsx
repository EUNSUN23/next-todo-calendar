'use client';
import React from 'react';
// import {useTasks} from "@/hooks/useTasks";
import Todo from "@/components/Todo";
import {useTasks} from "@/hooks/useTasks";


function TodoLists() {
    const {tasks, isLoading, error} = useTasks();
    if(isLoading) return <h3>loading</h3>

    return (
        <section className='description'>
            <ul className='pl-4'>
                {tasks.map(v => <Todo task={v}/>)}
            </ul>
        </section>
    );
}

export default TodoLists;