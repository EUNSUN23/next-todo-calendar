import React from 'react';
import {BsFilter} from "react-icons/bs";
import {BiCaretDown} from "react-icons/bi";

// TODO 1 - 필터 클릭시 border, border-color, bg color 상태변화
// TODO 2 - 필터 hover시 down arrow 보이게 하기
// TODO 3 - 필터 클릭시 옵션 보이게 하기 + animation
// TODO 4 - depth1 옵션에서 '참여자' 클릭시 옆에 참여자 select show (+ 참여자 명단 가져오기)
function TaskTodoFilter() {
    return (
        <section className='flex space-x-4 '>
            <div className='w-auto relative'> {/* 필터 - depth_1 */}
                <div className='flex space-x-1 items-center font-md py-1.5 cursor-pointer'> {/* 필터 1 타이틀 */}
                    <BsFilter/>
                    <span>전체</span>
                    <BiCaretDown/>
                </div>
                <div className='hidden w-full text-center absolute top-full left-0 font-md-400 cursor-pointer bg-white border border-gray-light-1'> {/* 필터 1 옵션 */}
                    <div className='hover:bg-neutral-light-2'>전체</div>
                    <div className='hover:bg-neutral-light-2'>참여자</div>
                    <div className='hover:bg-neutral-light-2'>완료</div>
                    <div className='hover:bg-neutral-light-2'>미완료</div>
                </div>
            </div>
            <div className='w-auto relative hidden'> {/* 필터 - depth_2 (참여자) */}
                <div className='flex space-x-1 items-center font-md px-3 py-1.5 cursor-pointer hover:border hover:border-gray-light-1 hover:bg-neutral-light-1'> {/* 필터 1 타이틀 */}
                    <BsFilter/>
                    <span>선택</span>
                    <BiCaretDown/>
                </div>
                <div className='w-full absolute top-full left-0 font-md-400 cursor-pointer bg-white text-center text-ellipsis overflow-auto ... border border-gray-light-1'> {/* 필터 1 옵션 */}
                    <div className='hover:bg-neutral-light-2'>선택</div>
                    <div className='hover:bg-neutral-light-2'>EUNSUN</div>
                    <div className='hover:bg-neutral-light-2'>HANEUL</div>
                </div>
            </div>
        </section>
    );
}

export default TaskTodoFilter;