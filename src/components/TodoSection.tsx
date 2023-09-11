import React from 'react';
import TodoHeader from "@/components/TodoHeader";
import TodoLists from "@/components/TodoLists";
import calendarSection from "@/components/CalendarSection";


function TodoSection() {
    return (
        <>
            <section className='basis-full lg:basis-1/5 '>
                <TodoHeader/>
                <TodoLists/>
            </section>
            <section className='border-2 border-black basis-full md:basis-1/3 lg:basis-1/4'>

            </section>
        </>
    );
}


export default TodoSection;