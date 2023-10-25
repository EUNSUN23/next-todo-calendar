'use client';
import React from 'react';
import {
    currentTaskTodoStateStore,
    currentTaskTodoTabSelector,
    TaskTodoTab,
    taskTodoTabListStateStore
} from "@/store/CurrentTaskTodoStateStore";
import {useRecoilValue, useResetRecoilState, useSetRecoilState} from "recoil";
import {useQueryClient} from "@tanstack/react-query";
import {AiOutlineRight} from "react-icons/ai";


function TabItem({name, id}: TaskTodoTab) {
    const currentTaskTodoTab = useRecoilValue(currentTaskTodoTabSelector);
    const setCurrentTaskTodo = useSetRecoilState(currentTaskTodoStateStore);
    const resetCurrentTaskTodo = useResetRecoilState(currentTaskTodoStateStore);
    const resetTaskTodoTabList = useResetRecoilState(taskTodoTabListStateStore);

    const queryClient = useQueryClient();

    const dynamicClass = currentTaskTodoTab?.id === id ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700';

    function onClickTabItemHandler() {
        if (id === 'taskTodoList') {
            resetCurrentTaskTodo();
            resetTaskTodoTabList();
            return;
        }

        const todos = queryClient.getQueryState(['taskTodo']);
        const currentTaskTodo = todos?.data.find(v => v._id === id);
        setCurrentTaskTodo({currentTaskTodoId: id, currentTaskTodo, isOnHover:false});
    }

    return (
        <div
            onClick={onClickTabItemHandler}
            className={`${dynamicClass} group inline-flex items-center border-b-2 py-4 px-1 text-3xl font-medium`}
        >
            <span>
                {
                    id === 'taskTodoList' ? name
                        : <span className='flex items-center'>
                            업무 목록
                            <AiOutlineRight className='mx-2'/>
                            {name}
                    </span>
                }
            </span>
        </div>
    );
}

export default TabItem;