import React from 'react';
import CalendarSection from "@/components/CalendarSection";
import TodoSection from "@/components/TodoSection";
import {MdFormatListBulletedAdd} from "react-icons/md";
import {getTasks} from "@/service/calendar";

// 서버 컴포넌트
// tasks, tasks의 groupId 가진 todo & note들 불러오기
export default async function Home() {

    const tasks = await getTasks();

    return (
        <>
            <main className="flex flex-wrap">
                <section className='basis-full md:basis-1/3 lg:basis-1/4 '>
                    <section className='flex justify-between w-full py-4 px-7'>
                        <div className='flex items-center text-3xl font-semibold text-[var(--color-gray-dark-3)]'>
                            오늘의 TO DO
                            <MdFormatListBulletedAdd className='inline pl-2' size='2.2rem'/>
                        </div>
                        <span className='text-2xl font-semibold text-[var(--color-gray-dark)]'>2023년 8월 22일 화요일</span>
                    </section>
                    <TodoSection/>
                </section>
                <CalendarSection tasks={tasks}/>
            </main>
        </>
    );
}
