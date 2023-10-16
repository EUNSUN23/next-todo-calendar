import React from 'react';
import TabItem, {TabItemProps} from "@/components/ui/Tabs/TabItem";

interface TabsProps {
    tabInfoList: TabItemProps[];
}
function Tabs({tabInfoList}:TabsProps) {
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
                        {
                            tabInfoList.map(v => <TabItem name={v.name} href={v.href}/>)
                        }
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Tabs;