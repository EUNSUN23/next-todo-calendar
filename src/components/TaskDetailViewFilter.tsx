import React from 'react';
import {BsFilter} from "react-icons/bs";
import {BiCaretDown} from "react-icons/bi";

function TaskDetailViewFilter() {
    return (
        <section className='flex space-x-4'> {/* 업무 contents */}
            <div className='w-auto relative border border-[var(--color-gray-light-1)]'> {/* 필터 - depth_1 */}
                <div className='flex space-x-1 items-center font-md px-2 py-1.5 cursor-pointer bg-[var(--color-neutral-light-1)]'> {/* 필터 1 타이틀 */}
                    <BsFilter/>
                    <span>전체</span>
                    <BiCaretDown/>
                </div>
                <div className='w-full text-center absolute top-full left-0 font-md-400 cursor-pointer bg-white border border-[var(--color-gray-light-1)]'> {/* 필터 1 옵션 */}
                    <div className='hover:bg-[var(--color-neutral-light-2)]'>전체</div>
                    <div className='hover:bg-[var(--color-neutral-light-2)]'>참여자</div>
                    <div className='hover:bg-[var(--color-neutral-light-2)]'>완료</div>
                    <div className='hover:bg-[var(--color-neutral-light-2)]'>미완료</div>
                </div>
            </div>
            <div className='w-auto relative border border-[var(--color-gray-light-1)]'> {/* 필터 - depth_2 (참여자) */}
                <div className='flex space-x-1 items-center font-md px-3 py-1.5 cursor-pointer bg-[var(--color-neutral-light-1)]'> {/* 필터 1 타이틀 */}
                    <BsFilter/>
                    <span>선택</span>
                    <BiCaretDown/>
                </div>
                <div className='w-full absolute top-full left-0 font-md-400 cursor-pointer bg-white text-center text-ellipsis overflow-auto ... border border-[var(--color-gray-light-1)]'> {/* 필터 1 옵션 */}
                    <div className='hover:bg-[var(--color-neutral-light-2)]'>선택</div>
                    <div className='hover:bg-[var(--color-neutral-light-2)]'>EUNSUN</div>
                    <div className='hover:bg-[var(--color-neutral-light-2)]'>HANEUL</div>
                </div>
            </div>
        </section>
    );
}

export default TaskDetailViewFilter;