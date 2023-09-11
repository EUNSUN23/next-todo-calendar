'use client';
import React from 'react';
import {useCurrentTask} from "@/context/CurrentTaskContext";

function CurrentTask() {
    const {isOpen, currentTask} = useCurrentTask();

    if(!isOpen) return null;

    console.log("currentTask: ",currentTask);

    return (
        <section className='border-2 border-black basis-full md:basis-1/3 lg:basis-1/4'>

        </section>
    );
}

export default CurrentTask;