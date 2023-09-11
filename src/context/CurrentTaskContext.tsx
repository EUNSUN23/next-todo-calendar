'use client';
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
            return {...state, isOpen: true, currentTask: action.payload};
        case 'task/closed':
            return {...state, isOpen:false, currentTask: {}};
        default:
            throw new Error("Unknown action type");
    }
}


export function CurrentTaskProvider({children}:ReactChildNode) {
    const [{isOpen, currentTask, error}, dispatch] = useReducer(reducer, initialState);

    function openCurrentTask(task:Task){
        dispatch({type:'task/opened', payload: task});
    }

    function closeCurrentTask(){
        dispatch({type:'task/closed'});
    }

    return (
        <CurrentTaskContext.Provider value={{
            isOpen,
            currentTask,
            error,
            openCurrentTask,
            closeCurrentTask
        }}>{children}</CurrentTaskContext.Provider>
    );
}

export function useCurrentTask(){
    const context = useContext(CurrentTaskContext);
    if(context === undefined) throw new Error("CurrentTaskContext was used outside the CurrentTaskContextProvider");
    return context;
}