import React from 'react';
import Tabs from "@/components/ui/Tabs/Tabs";
import TaskTodoTabContents from "@/components/taskDetailView/taskTodo/TaskTodoTabContents";


function TaskTodoSection() {

    return (
        <section className='w-full flex-col space-y-4 '>
            <section className='flex-col'>  {/* 업무 contents */}
                {/*<div className='h-14 header-lg mx-2 items-center border-b border-neutral pb-2'>업무</div>*/}
                <Tabs />
                <TaskTodoTabContents/>
            </section>
        </section>
    );
}

export default TaskTodoSection;