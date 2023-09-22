import React from 'react';
import Avatar from "@/components/Avatar";
import {Task} from "@/utils/types";

type Props = {
    task:Task;
}
function TaskMember({task}:Props) {
    return (
        <section className='w-full border border-black'>
            <ul className='flex flex-col space-y-4'>
                <li className='flex space-x-4'>
                    <span className='header-md mx-2'>생성</span>
                    <Avatar size='lg' user={task.createdBy!}/>
                    <span className='font-md-gray'>, Created at 2023-09-23</span>
                </li>
                <li className='flex space-x-4'>
                    <span className='header-md mx-2'>참여</span>
                    <ul className='flex -space-x-2 overflow-hidden'>
                        <Avatar size='lg' user={task.createdBy!}/>
                        <Avatar size='lg' user={task.createdBy!}/>
                        <Avatar size='lg' user={task.createdBy!}/>
                        <Avatar size='lg' user={task.createdBy!}/>
                        <Avatar size='lg' user={task.createdBy!}/>
                    </ul>
                </li>
            </ul>
        </section>
    );
}

export default TaskMember;