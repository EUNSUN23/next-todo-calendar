'use client';
import React,{createContext, useContext, useReducer} from 'react';
import {ReactChildNode, Task} from "@/utils/types";

const CurrentTaskContext = createContext();

export type CurrentTodoState = {
    isOpen: boolean;
    currentTaskId: string;
    error: string;
}

const initialState:CurrentTodoState = {
    isOpen: false,
    currentTaskId:'',
    error: ''
}

function reducer(state, action){
    switch(action.type){
        case 'task/opened':
            return {...state, isOpen: true, currentTaskId: action.payload};
        case 'task/closed':
            return {...state, isOpen:false, currentTaskId: ''};
        default:
            throw new Error("Unknown action type");
    }
}


export function CurrentTaskProvider({children}:ReactChildNode) {
    const [{isOpen, currentTaskId, error}, dispatch] = useReducer(reducer, initialState);

    function openCurrentTask(taskId:string){
        dispatch({type:'task/opened', payload: taskId});
    }

    function closeCurrentTask(){
        dispatch({type:'task/closed'});
    }

    return (
        <CurrentTaskContext.Provider value={{
            isOpen,
            currentTaskId,
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