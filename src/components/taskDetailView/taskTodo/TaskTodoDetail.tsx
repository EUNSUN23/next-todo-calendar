'use client';
import React from 'react';
import {useRecoilValue} from "recoil";
import {currentTaskTodoStateStore} from "@/store";
import FinishToggle from "@/components/ui/FinishToggle";
import MemberBadge from "@/components/ui/MemberBadge";

function TaskTodoDetail() {
    const {currentTaskTodo} = useRecoilValue(currentTaskTodoStateStore);

    console.log("currentTaskTodo : ",currentTaskTodo);

    function onClickMemberBadgeHandler(id:string){
        console.log("memberid: ",id);
        // todo - id 멤버 detail popup
    }

    function onClickRemoveMemberBadgeHandler(id:string){
        console.log("removeid : ",id);
        // todo - id 멤버 asignee에서 제거
    }

    return (
        <div className=' max-w-4xl mx-auto mt-10'>
            <div className="flex items-center px-4 sm:px-0">
                <h3 className="header-lg font-semibold leading-10 text-gray-900">{currentTaskTodo.contents}</h3>
                <p className="mt-1 ml-auto max-w-2xl text-2xl leading-6 text-gray-500">Updated at {currentTaskTodo.updateDate}</p>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-2xl font-medium leading-9 text-gray-900">진행 상태</dt>
                        <dd className="mt-1 text-2xl leading-9 text-gray-700 sm:col-span-2 sm:mt-0">
                            <FinishToggle/>
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-2xl font-medium leading-9 text-gray-900">참여 멤버</dt>
                        <dd className="mt-1 text-2xl leading-9 text-gray-700 sm:col-span-2 sm:mt-0">
                            {currentTaskTodo.assignee?.map(v =>
                                <MemberBadge
                                    key={v._id}
                                    color={v.color}
                                    text={v.name}
                                    id={v._id}
                                    onClickBadgeHandler={onClickMemberBadgeHandler}
                                    onClickRemoveBadgeHandler={onClickRemoveMemberBadgeHandler}
                                />)}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-2xl font-medium leading-9 text-gray-900">Created By</dt>
                        <dd className="mt-1 text-2xl leading-9 text-gray-700 sm:col-span-2 sm:mt-0">EUNSUN</dd>
                    </div>

                </dl>
            </div>
        </div>
    );
}

export default TaskTodoDetail;