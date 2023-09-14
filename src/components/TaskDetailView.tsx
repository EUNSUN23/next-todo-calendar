'use client';
import React from 'react';
import FromToDatePicker from "@/components/FromToDatePicker";
import {useTask} from "@/hooks/useTask";

type Props = {
    currentTaskId: string;
}
function TaskDetailView({currentTaskId}:Props) {
    const {task, isLoading, error} = useTask(currentTaskId);

    if(isLoading) return <div>loading...</div>; // todo - loader 추가
    // todo react-query로 taskId에 맞는 task 가져오기.


    // console.log("currentTask: ",currentTask);
    // currentTask.title // 테스트프로젝트 2 /타이틀
    // currentTask.finish // 테스트프로젝트 2 / 완료 여부
    // currentTask.start // yyyy-mm-dd
    // currentTask.end
    // currentTask.level // "1" "2" "3"
    // currentTask.groupId // 식별자
    // currentTask.todos // todo목록 (contents:내용, finish, groupId:속한 taskid, id: 고유id (groupId + 자기id), createdBy, updatedDate, assignee
    // currentTask.notes // notes목록 (contents:내용, groupId:속한 taskid, id: 고유id (groupId + 자기id), createdBy, updatedDate
    // currentTask.createdBy

    return (
        <section className='w-full border-1 border-black p-3'>
            <section className='w-full flex'>
                <span className='text-3xl font-semibold text-[var(--color-gray-dark-3)]'>테스트 프로젝트 2</span>
                <FromToDatePicker
                    startDate={new Date(task.start)}
                    endDate={new Date(task.end)}
                    onChangeStartDate={() => {}}
                    onChangeEndDate={() => {}}
                />
            </section>
        </section>
    );
}

export default TaskDetailView;