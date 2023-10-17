import React from 'react';
import TaskTodoList from "@/components/taskDetailView/taskTodo/TaskTodoList";
import TaskTodoFilter from "@/components/taskDetailView/taskTodo/TaskTodoFilter";
import Tabs from "@/components/ui/Tabs/Tabs";


function TaskTodoSection() {

    const tabInfoList = [
        {
            name:'task1',
            href:'/main/task1 description/task1'
        }
    ]


    return (
        <section className='w-full flex-col space-y-4 '>
            <section className='flex-col'>  {/* 업무 contents */}
                {/*<div className='h-14 header-lg mx-2 items-center border-b border-neutral pb-2'>업무</div>*/}
                <Tabs tabInfoList={tabInfoList}/>
                <TaskTodoFilter/>
                <TaskTodoList/>
            </section>
        </section>
    );
}

export default TaskTodoSection;