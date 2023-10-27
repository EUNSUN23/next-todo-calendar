import React from 'react';
import TaskTodoToolAddSub from "@/components/taskDetailView/taskTodo/TaskTodoToolAddSub";
import TaskTodoToolRemove from "@/components/taskDetailView/taskTodo/TaskTodoToolRemove";


function TaskTodoTool({showTools}:{showTools:boolean}) {

    return (
        <div
            className={`${showTools ? 'opacity-100':'opacity-0'} flex mx-1 text-3xl text-neutral-dark `}>
            <TaskTodoToolAddSub/>
            <TaskTodoToolRemove/>
        </div>
    );
}

export default TaskTodoTool;