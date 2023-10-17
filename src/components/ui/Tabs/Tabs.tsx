'use client';
import React from 'react';
import TabItem from "@/components/ui/Tabs/TabItem";
import {useRecoilValue} from "recoil";
import {taskTodoTabListStateStore} from "@/store";


function Tabs() {
    const taskTodoTabList = useRecoilValue(taskTodoTabListStateStore);

    return (
        <div>
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">Select a tab</label>
                {/*<!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->*/}
                <select id="tabs" name="tabs"
                        className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
                    {
                        taskTodoTabList.map(v => <option key={v.id} value={v.id}>{v.name}</option>)
                    }
                </select>
            </div>
            <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {
                            taskTodoTabList.map(v => <TabItem key={v.id} name={v.name} id={v.id}/>)
                        }
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Tabs;