import React from 'react';
import {Note, Todo} from "@/utils/types";

type Props = {
    todos: Todo[] | [] | undefined,
    notes: Note[] | [] | undefined
}

// todo - note는 todo에 속하게 둘건지, 따로 둘건지 ?
function TaskTodoList({todos, notes}:Props) {
    console.log("todos: ",todos);
    console.log("notes: ",notes);
    return (
        <div></div>
    );
}

export default TaskTodoList;