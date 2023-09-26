import React from 'react';
import {Note, Todo} from "@/utils/types";
import TaskTodoItem from "@/components/taskDetailView/TaskTodoItem";

type Props = {
    todos: Todo[] | [],
    notes: Note[] | []
}

// todo - note는 todo에 속하게 둘건지, 따로 둘건지 ?
function TaskTodoList({todos, notes}:Props) {
    console.log("todos: ",todos);
    console.log("notes: ",notes);
    return (
        <div className='flex-col'>
            {todos?.map((v) => <TaskTodoItem key={v._id} todo={v}/>)}
        </div>
    );
}

export default TaskTodoList;