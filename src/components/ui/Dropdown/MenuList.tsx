'use client';
import React, {Fragment} from 'react';
import {Menu, Transition} from "@headlessui/react";
import {useResetRecoilState} from "recoil";
import {currentTaskTodoStateStore} from "@/store";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export interface MenuItemObject {
    onClickHandler: (onClickHandlerArg:string) => void;
    onClickHandlerArg:string;
    name:string;
}

interface MenuItemProps {
    menuItem: MenuItemObject;
}

function MenuItem({menuItem:{onClickHandler, onClickHandlerArg, name}}:MenuItemProps) {
    return (
        <Menu.Item>
            {({active}) => (
                <a
                    href="#"
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full px-4 py-2 text-[1.5rem] relative z-10'
                    )}
                    onClick={
                        () => onClickHandler(onClickHandlerArg)
                    }
                >
                    {name}
                </a>
            )}
        </Menu.Item>
    );
}

interface MenuListProps {
    menuItems:MenuItemObject[];
}

function MenuList({menuItems}:MenuListProps) {
    const reseutCurrentTaskTodo = useResetRecoilState(currentTaskTodoStateStore);

    return (
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <div className='w-fit' onMouseLeave={() => reseutCurrentTaskTodo()}>
                    <Menu.Items
                        className="absolute right-0 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >

                        <div className="py-1 w-40">
                            {
                                menuItems.map(v => <MenuItem key={v.name} menuItem={v}/>)
                            }
                        </div>
                    </Menu.Items>
                </div>
            </Transition>
    );
}

export default MenuList;