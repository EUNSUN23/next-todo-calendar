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
import TaskDetailViewFilter from "@/components/TaskDetailViewFilter";

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
        <section className='flex flex-col space-y-10 w-full border border-black p-3'>
            {/* STRT : description & start/end date */}
            <section className='w-full flex justify-between items-center border border-black'>
                <span className='header-xl'>{task.description}</span>
                <FromToDatePicker
                    startDate={new Date(task.start)}
                    endDate={new Date(task.end)}
                    onChangeStartDate={onChangeStartDateHandler}
                    onChangeEndDate={onChangeEndDateHandler}
                />
            </section>
            {/* END : description & start/end date */}
            {/* START :  생성 & 참여멤버 목록 */}
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
            {/* END :  생성 & 참여멤버 목록 */}
            {/* START :  TO-DO & NOTE 목록 */}
            <section className='w-full flex-col space-y-4'>
                <div className='header-lg mx-2 items-center border-b border-[var(--color-neutral)] pb-2'>업무</div> {/* 업무 header */}
                <TaskDetailViewFilter/>
                <section className='border border-black flex-col'>  {/* 업무 contents */}

                </section>
            </section>
            {/* END :  TO-DO 목록 */}
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