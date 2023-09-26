import React from 'react';
import {Todo} from "@/utils/types";
import TaskTodoItem from "@/components/taskDetailView/taskTodo/TaskTodoItem";
import TaskTodoFilter from "@/components/taskDetailView/taskTodo/TaskTodoFilter";
import TaskTodoAddButton from "@/components/taskDetailView/taskTodo/TaskTodoAddButton";

type Props = {
    todos: Todo[] | []
}

// todo - note는 todo에 속하게 둘건지, 따로 둘건지 ?
function TaskTodoList({todos}: Props) {
    console.log("todos: ", todos);
    return (
        <div className='flex-col'>
            {todos?.map((v) => <TaskTodoItem key={v._id} todo={v}/>)}
        </div>
    );
}

export default TaskTodoList;