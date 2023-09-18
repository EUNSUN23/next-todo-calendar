'use client';
import React from 'react';
import FromToDatePicker from "@/components/FromToDatePicker";
import {useTask} from "@/hooks/useTask";
import {useEditTask} from "@/hooks/useEditTask";
import {formatDateToStr} from "@/utils/common";
import {DateFormat} from "@/utils/constant";

type Props = {
    currentTaskId: string;
}

function TaskDetailView({currentTaskId}: Props) {
    const {task, isLoading, error} = useTask(currentTaskId);
    const {isEditing, editTaskById} = useEditTask();

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
        <section className='w-full border-1 border-black p-3'>
            <section className='w-full flex'>
                <span className='text-3xl font-semibold text-[var(--color-gray-dark-3)]'>{task.description}</span>
                {
                    isEditing ?
                    <div>editing...</div>
                    : <FromToDatePicker
                        startDate={new Date(task.start)}
                        endDate={new Date(task.end)}
                        onChangeStartDate={onChangeStartDateHandler}
                        onChangeEndDate={onChangeEndDateHandler}
                    />
                }
            </section>
        </section>
    );
}

export default TaskDetailView;