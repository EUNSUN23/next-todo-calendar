'use client';
import React, {createContext, Reducer, ReducerWithoutAction, useContext, useReducer} from 'react';
import {ReactChildNode} from "@/utils/types";


export type CurrentTodoState = {
    isOpen?: boolean;
    currentTaskId?: string;
    error?: string;
};

const initialState: CurrentTodoState = {
    isOpen: false,
    currentTaskId: '',
    error: ''
}

export type CurrentTaskContextValue = CurrentTodoState & {
    openCurrentTask: (id:string) => void;
    closeCurrentTask: () => void;
};

type ReducerActions = {
    type: string;
    payload?: string;
}

const CurrentTaskContext = createContext<CurrentTodoState | null>(null);

function reducer(state:CurrentTodoState, action:ReducerActions):CurrentTodoState {
    switch (action.type) {
        case 'task/opened':
            return {...state, isOpen: true, currentTaskId: action.payload};
        case 'task/closed':
            return {...state, isOpen: false, currentTaskId: ''};
        default:
            throw new Error("Unknown action type");
    }
}



export function CurrentTaskProvider({children}: ReactChildNode) {
    const [{isOpen, currentTaskId, error}, dispatch] = useReducer<CurrentTodoState,never>(reducer, initialState);

    function openCurrentTask(taskId: string): void {
        dispatch({type: 'task/opened', payload: taskId});
    }

    function closeCurrentTask(): void {
        dispatch({type: 'task/closed'});
    }

    const contextValue:CurrentTaskContextValue = {
        isOpen,
        currentTaskId,
        error,
        openCurrentTask,
        closeCurrentTask
    };

    return (
        <CurrentTaskContext.Provider value={contextValue}>{children}</CurrentTaskContext.Provider>
    );
}

export function useCurrentTask() {
    const context = useContext(CurrentTaskContext);
    if (context === undefined) {
        throw new Error("CurrentTaskContext was used outside the CurrentTaskContextProvider");
    } else {
        return context;
    }

}