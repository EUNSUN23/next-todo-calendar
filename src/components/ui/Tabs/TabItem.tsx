'use client';
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

export type TabItemProps = {
    name:string;
    href:string;
}
function TabItem({name, href}:TabItemProps) {
    const pathname = usePathname();
    const dynamicClass = pathname === href ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700';

    return (
        <Link
            href={href}
            className={`${dynamicClass} group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium`}
        >
            <span>{name}</span>
        </Link>
    );
}

export default TabItem;