'use client';
import React from 'react';
import {useCurrentTask} from "@/context/CurrentTaskContext";

function TaskDetailView() {
    const {isOpen, currentTask} = useCurrentTask();

    if(!isOpen) return null; // todo - loader 추가

    console.log("currentTask: ",currentTask);
    currentTask.title // 테스트프로젝트 2 /타이틀
    currentTask.finish // 테스트프로젝트 2 / 완료 여부
    currentTask.start // yyyy-mm-dd
    currentTask.end
    currentTask.level // "1" "2" "3"
    currentTask.groupId // 식별자
    currentTask.todos // todo목록 (contents:내용, finish, groupId:속한 taskid, id: 고유id (groupId + 자기id), createdBy, updatedDate, assignee
    currentTask.notes // notes목록 (contents:내용, groupId:속한 taskid, id: 고유id (groupId + 자기id), createdBy, updatedDate
    currentTask.createdBy

    return (
        <section className='border-2 border-black '>

        </section>
    );
}

export default TaskDetailView;