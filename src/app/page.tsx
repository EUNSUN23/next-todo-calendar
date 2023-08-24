import React from 'react';
import Header from "@/components/Header";
import Badge from "@/components/Badge";
import {MdFormatListBulletedAdd} from "react-icons/md";
import {FiCheckSquare} from "react-icons/fi";
import CheckSquare from "@/components/CheckSquare";


export default function Home() {
    return (
        <>
            <div className="container">
                <Header/>
                    <main className="flex flex-wrap">
                        {/* todo 시작 */}
                        <section className='border border-black basis-full md:basis-1/3 lg:basis-1/4 '>
                            {/*todo 타이틀 시작*/}
                            <section className='flex justify-between w-full py-4 px-7'>
                                <div className='flex items-center text-3xl font-semibold text-[var(--color-gray-dark-3)]'>
                                    오늘의 TO DO
                                    <MdFormatListBulletedAdd className='inline pl-2' size='2.2rem'/>
                                </div>
                                <span className='text-2xl font-semibold text-[var(--color-gray-dark)]'>2023년 8월 22일 화요일</span>
                            </section>
                            {/*todo 타이틀 끝*/}
                            {/*todo 목록 시작*/}
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
                            {/*todo 목록 끝*/}
                        </section>
                        {/* todo 끝 */}
                        {/*calendar 시작*/}
                        <section className='flex-1'>
                            <h3>content 1</h3>

                        </section>
                        {/*calendar 끝*/}
                    </main>
            </div>
        </>
    );
}
