import React,{createContext, useContext, useReducer} from 'react';
import {ReactChildNode, Task} from "@/utils/types";

const CurrentTaskContext = createContext();

export type CurrentTodoState = {
    isOpen: boolean;
    currentTask: Record<string, never>;
    error: string;
}

const initialState:CurrentTodoState = {
    isOpen: false,
    currentTask:{},
    error: ""
}

function reducer(state, action){
    switch(action.type){
        case 'task/opened':
            return {...state, isOpen: true, currentTodo: action.payload.task};
        case 'task/closed':
            return {...state, isOpen:false, currentTodo: {}};
        default:
            throw new Error("Unknown action type");
    }
}


export function CurrentTaskProvider({children}:ReactChildNode) {
    const [{isOpen, currentTodo, error}, dispatch] = useReducer(reducer, initialState);

    function openCurrentTask(task:Task){
        dispatch({type:'task/open'})
    }

    return (
        <CurrentTaskContext.Provider value={{
            isOpen,
            currentTodo,
            error
        }}>{children}</CurrentTaskContext.Provider>
    );
}

export default CurrentTaskProvider;