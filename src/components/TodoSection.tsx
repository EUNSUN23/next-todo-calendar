'use client';
import React from 'react';
import CheckSquare from "@/components/CheckSquare";
import Badge from "@/components/Badge";
import {MdFormatListBulletedAdd} from "react-icons/md";

function TodoSection() {
    return (
        <section className='basis-full md:basis-1/3 lg:basis-1/4 '>
            <section className='flex justify-between w-full py-4 px-7'>
                <div className='flex items-center text-3xl font-semibold text-[var(--color-gray-dark-3)]'>
                    오늘의 TO DO
                    <MdFormatListBulletedAdd className='inline pl-2' size='2.2rem'/>
                </div>
                <span className='text-2xl font-semibold text-[var(--color-gray-dark)]'>2023년 8월 22일 화요일</span>
            </section>
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
        </section>
    );
}

export default TodoSection;