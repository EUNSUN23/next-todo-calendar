'use client';
import React from 'react';
import CheckSquare from "@/components/CheckSquare";
import Badge from "@/components/Badge";
import {Task} from "@/utils/types";
import {useQuery} from "@tanstack/react-query";
import {getTasks} from "@/service/calendar";


function TodoLists() {
    const {data: tasks} = useQuery({
        queryKey: ['tasks'],
        queryFn: getTasks
    }) as Task[];

    console.log("todolists tasks: ",tasks);
    return (
        <section className='description'>
            <ul className='pl-4'>
                <li className='flex justify-center space-x-4 text-2xl text-[var(--color-gray-dark)] font-semibold'>
                              <span>
                                  <CheckSquare id='todo1'/>
                                  프로젝트 레이아웃 구성
                              </span>
                    <Badge color='red' size='sm' text='D-5'/>
                </li>
            </ul>
        </section>
    );
}

export default TodoLists;