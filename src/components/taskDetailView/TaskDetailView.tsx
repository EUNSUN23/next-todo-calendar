'use client';
import React from 'react';
import {useTask} from "@/hooks/useTask";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Avatar from "@/components/Avatar";
import TaskTodoAddButton from "@/components/taskDetailView/taskTodoAdd/TaskTodoAddButton";
import TaskTodoAddForm from "@/components/taskDetailView/taskTodoAdd/TaskTodoAddForm";
import TaskTodoFilter from "@/components/taskDetailView/TaskTodoFilter";
import TaskDetailViewHeader from "@/components/taskDetailView/TaskDetailViewHeader";

type Props = {
    currentTaskId: string;
}

function TaskDetailView({currentTaskId}: Props) {
    const {task, isLoading} = useTask(currentTaskId);


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


    return (
        <section className='flex flex-col space-y-10 w-full border border-black p-3'>
            <TaskDetailViewHeader task={task}/>
            <TaskMember task={task}/>
            {/* START :  TO-DO & NOTE 목록 */}
            <section className='w-full flex-col space-y-4 '>
                <div className='header-lg mx-2 items-center border-b border-neutral pb-2'>업무</div>
                {/* 업무 header */}
                <section className='flex-col space-y-4 px-2'>  {/* 업무 contents */}
                    <TaskTodoFilter/>
                    <TaskTodoAddForm/>
                    <TaskTodoAddButton/>
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