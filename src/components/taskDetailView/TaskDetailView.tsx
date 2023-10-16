'use client';
import React from 'react';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import TaskDetailViewHeader from "@/components/taskDetailView/TaskDetailViewHeader";
import TaskMember from "@/components/taskDetailView/taskMember/TaskMember";
import TaskTodoSection from "@/components/taskDetailView/taskTodo/TaskTodoSection";

// todo - currentTaskId 넘겨주기만 하고 직접 Task조회는 x
function TaskDetailView() {
    // const {task, isLoading} = useTask(currentTaskId);


    // if (isLoading) return <div>loading...</div>; // todo - loader 추가
    // todo react-query로 taskId에 맞는 task 가져오기.


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
        <section className='flex flex-col space-y-10 w-full border border-black p-3'>
            <TaskDetailViewHeader/>
            <TaskMember />
            {/* START :  TO-DO & NOTE 목록 */}
            <TaskTodoSection />
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