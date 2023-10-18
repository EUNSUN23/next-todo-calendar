'use client';
import React from 'react';
import {useRecoilValue} from "recoil";
import {currentTaskTodoStateStore} from "@/store";

function TaskTodoDetail() {
    const {currentTaskTodo} = useRecoilValue(currentTaskTodoStateStore);
    return (
        <div>
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">{currentTaskTodo.contents}</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Updated at {currentTaskTodo.updateDate}</p>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Created By</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">EUNSUN</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">참여 멤버</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            누구누구,,
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">진행 상태</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{currentTaskTodo.finish}</dd>
                    </div>
                </dl>
            </div>
        </div>
    );
}

export default TaskTodoDetail;