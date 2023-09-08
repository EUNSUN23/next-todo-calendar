import React from 'react';
import TodoHeader from "@/components/TodoHeader";
import TodoLists from "@/components/TodoLists";


function TodoSection() {
    return (
        <section className='basis-full md:basis-1/3 lg:basis-1/4 '>
            <TodoHeader/>
            <TodoLists/>
        </section>
    );
}


export default TodoSection;