import React from 'react';
import TaskTodoList from "@/components/taskDetailView/taskTodo/TaskTodoList";
import TaskTodoFilter from "@/components/taskDetailView/taskTodo/TaskTodoFilter";
import {useTaskTodo} from "@/hooks/useTaskTodo";
import {TaskTodoItem} from "@/components/taskDetailView/taskTodo/TaskTodoItem";

type Props = {
    taskId: string;
}

function TaskTodo({taskId}: Props) {
    const {todos, isLoading, error} = useTaskTodo(taskId);

    // todo - loader 추가
    if(isLoading) return <div>loading...</div>

    console.log("todos:::: ",todos);


    return (
        <section className='w-full flex-col space-y-4 '>
            <section className='flex-col px-2'>  {/* 업무 contents */}
                <div className='h-14 header-lg mx-2 items-center border-b border-neutral pb-2'>업무</div>
                <TaskTodoFilter/>
                <TaskTodoList>
                        {todos?.map((v) => <TaskTodoItem key={v._id} todo={v} taskId={taskId}/>)}
                </TaskTodoList>
            </section>
        </section>
    );
}

export default TaskTodo;