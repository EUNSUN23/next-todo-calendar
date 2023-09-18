'use client';
import React from 'react';
import FromToDatePicker from "@/components/FromToDatePicker";
import {useTask} from "@/hooks/useTask";
import {useEditTask} from "@/hooks/useEditTask";
import {formatDateToStr} from "@/utils/common";
import {DateFormat} from "@/utils/constant";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Avatar from "@/components/Avatar";


type Props = {
    currentTaskId: string;
}

function TaskDetailView({currentTaskId}: Props) {
    const {task, isLoading} = useTask(currentTaskId);
    const {isEditing, editTaskById} = useEditTask();

    console.log("isEditing: ", isEditing);

    if (isLoading) return <div>loading...</div>; // todo - loader 추가
    // todo react-query로 taskId에 맞는 task 가져오기.


    console.log("currentTask: ", task);
    // currentTask.title // 테스트프로젝트 2 /타이틀
    // currentTask.finish // 테스트프로젝트 2 / 완료 여부
    // currentTask.start // yyyy-mm-dd
    // currentTask.end
    // currentTask.level // "1" "2" "3"
    // currentTask.groupId // 식별자
    // currentTask.todos // todo목록 (contents:내용, finish, groupId:속한 taskid, id: 고유id (groupId + 자기id), createdBy, updatedDate, assignee
    // currentTask.notes // notes목록 (contents:내용, groupId:속한 taskid, id: 고유id (groupId + 자기id), createdBy, updatedDate
    // currentTask.createdBy
    function onChangeStartDateHandler(date: Date) {
        console.log("date: ", Date);
        if (confirm("시작 날짜를 수정하시겠습니까?")) {
            editTaskById({...task, start: formatDateToStr(date, DateFormat.YMD_DASH)});
        }

    }

    function onChangeEndDateHandler(date: Date) {
        if (confirm("종료 날짜를 수정하시겠습니까?")) {
            editTaskById({...task, end: formatDateToStr(date, DateFormat.YMD_DASH)});
        }
    }

    return (
        <section className='w-full border border-black p-3'>
            {/* STRT : description & start/end date */}
            <section className='w-full flex border border-black mb-5'>
                <span className='text-3xl font-semibold text-[var(--color-gray-dark-3)]'>{task.description}</span>
                <FromToDatePicker
                    startDate={new Date(task.start)}
                    endDate={new Date(task.end)}
                    onChangeStartDate={onChangeStartDateHandler}
                    onChangeEndDate={onChangeEndDateHandler}
                />
            </section>
            {/* END : description & start/end date */}
            {/* START :  작업 완료 & 남은 기간 현황 */}
            <section className='w-full border border-black mb-5'>
                <ul className='flex flex-col text-2xl font-semibold text-[var(--color-gray-dark-3)]'>
                    <li className='flex'>생성 <Avatar size='md' user={task.createdBy!}/> <span className='text-xl font-semibold text-[var(--color-gray-dark-2)]'>2023-09-23</span></li>
                    <li className='flex'>
                        참여
                        <ul className='flex -space-x-2 overflow-hidden'>
                            <Avatar size='md' user={task.createdBy!}/>
                            <Avatar size='md' user={task.createdBy!}/>
                            <Avatar size='md' user={task.createdBy!}/>
                            <Avatar size='md' user={task.createdBy!}/>
                            <Avatar size='md' user={task.createdBy!}/>
                        </ul>
                    </li>
                </ul>
            </section>

            <ToastContainer
                position="top-center"
                autoClose={3000}
                closeOnClick
                rtl={false}
                theme='light'
            />
        </section>
    );
}

export default TaskDetailView;