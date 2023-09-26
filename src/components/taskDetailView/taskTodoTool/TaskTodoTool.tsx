import React from 'react';
import TaskTodoToolAddSub from "@/components/taskDetailView/taskTodoTool/TaskTodoToolAddSub";
import TaskTodoToolControlTodo from "@/components/taskDetailView/taskTodoTool/TaskTodoToolControlTodo";

type Props = {
    isShow: boolean;
}

function TaskTodoTool({isShow}: Props) {
    return isShow ?
        <div
            className='flex absolute top-1/2 left-0 translate-y-[-50%] text-3xl text-neutral-dark '>
            <TaskTodoToolAddSub/>
            <TaskTodoToolControlTodo/>
        </div>
        : null;
}

export default TaskTodoTool;