import React from 'react';
import TabItem, {TabItemProps} from "@/components/ui/Tabs/TabItem";
import {useRecoilValue} from "recoil";
import {currentTaskStateStore} from "@/store";

interface TabsProps {
    tabInfoList: TabItemProps[];
}
function Tabs({tabInfoList}:TabsProps) {
    const {currentTask} = useRecoilValue(currentTaskStateStore);

    return (
        <div>
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">Select a tab</label>
                {/*<!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->*/}
                <select id="tabs" name="tabs"
                        className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
                    {
                        tabInfoList.map(v => <option key={v.href} value={v.href}>{v.name}</option>)
                    }
                </select>
            </div>
            <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        <TabItem key={`/main/${currentTask.description}`} name='업무 목록' href={`/main/${currentTask.description}`}/>
                        {
                            tabInfoList.map(v => <TabItem key={v.href} name={v.name} href={v.href}/>)
                        }
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Tabs;