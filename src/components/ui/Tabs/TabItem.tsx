'use client';
import React from 'react';
import {currentTaskTodoStateStore, currentTaskTodoTabSelector, TaskTodoTab} from "@/store/CurrentTaskTodoStateStore";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {useQueryClient} from "@tanstack/react-query";


function TabItem({name, id}:TaskTodoTab) {
    const currentTaskTodoTab = useRecoilValue(currentTaskTodoTabSelector);
    const setCurrentTaskTodo = useSetRecoilState(currentTaskTodoStateStore);

    const queryClient = useQueryClient();

    const dynamicClass = currentTaskTodoTab.id === id ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700';

    function onClickTabItemHandler(){
        const todos = queryClient.getQueryState(['taskTodo']);
        const currentTaskTodo = todos?.data.find(v => v._id === id);
        setCurrentTaskTodo({currentTaskTodoId:id, currentTaskTodo});
    }

    return (
        <div
            onClick={onClickTabItemHandler}
            className={`${dynamicClass} group inline-flex items-center border-b-2 py-4 px-1 text-3xl font-medium`}
        >
            <span>{name}</span>
        </div>
    );
}

export default TabItem;