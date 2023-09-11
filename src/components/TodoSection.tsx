import React from 'react';
import TodoHeader from "@/components/TodoHeader";
import TodoLists from "@/components/TodoLists";
import CurrentTask from "@/components/CurrentTask";


function TodoSection() {
    return (
        <>
            <section className='basis-full lg:basis-1/5 '>
                <TodoHeader/>
                <TodoLists/>
            </section>
            <CurrentTask/>
        </>
    );
}


export default TodoSection;