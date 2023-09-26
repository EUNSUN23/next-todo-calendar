'use client';
import React, {createContext, useContext, useReducer} from 'react';
import {ReactChildNode} from "@/utils/types";


export type OpenTaskState = {
    isOpen?: boolean;
    currentTaskId?: string;
    error?: string;
};

const initialState: OpenTaskState = {
    isOpen: false,
    currentTaskId: '',
    error: ''
}

export type CurrentTaskContextValue = OpenTaskState & {
    openCurrentTask: (id:string) => void;
    closeCurrentTask: () => void;
};

type ReducerActions = {
    type: string;
    payload?: string;
}

const OpenTaskContext = createContext<OpenTaskState | null>(null);

function reducer(state:OpenTaskState, action:ReducerActions):OpenTaskState {
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
    const [{isOpen, currentTaskId, error}, dispatch] = useReducer<OpenTaskState,never>(reducer, initialState);

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
        <OpenTaskContext.Provider value={contextValue}>{children}</OpenTaskContext.Provider>
    );
}

export function useOpenTask() {
    const context = useContext(OpenTaskContext);
    if (context === undefined) {
        throw new Error("CurrentTaskContext was used outside the OpenTaskContextProvider");
    } else {
        return context;
    }

}