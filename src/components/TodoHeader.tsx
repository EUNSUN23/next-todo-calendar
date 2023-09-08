import React from 'react';
import {MdFormatListBulletedAdd} from "react-icons/md";

function TodoHeader() {
    return (
        <section className='flex justify-between w-full py-4 px-7'>
            <div className='flex items-center text-3xl font-semibold text-[var(--color-gray-dark-3)]'>
                오늘의 TO DO
                <MdFormatListBulletedAdd className='inline pl-2' size='2.2rem'/>
            </div>
            <span className='text-2xl font-semibold text-[var(--color-gray-dark)]'>2023년 8월 22일 화요일</span>
        </section>
    );
}

export default TodoHeader;