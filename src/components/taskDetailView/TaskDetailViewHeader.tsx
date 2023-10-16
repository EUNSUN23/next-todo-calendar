import React from 'react';
import FromToDatePicker from "@/components/taskDetailView/FromToDatePicker";
import {formatDateToStr} from "@/utils/common";
import {DateFormat} from "@/utils/constant";
import {useEditTask} from "@/hooks/useEditTask";
import {useRecoilValue} from "recoil";
import {currentTaskStateStore} from "@/store";

function TaskDetailViewHeader() {
    const {currentTask} = useRecoilValue(currentTaskStateStore);
    const {isEditing, editTaskById} = useEditTask();

    function onChangeStartDateHandler(date: Date) {
        console.log("date: ", Date);
        if (confirm("시작 날짜를 수정하시겠습니까?")) {
            editTaskById({_id:currentTask._id, key:'start', value: formatDateToStr(date, DateFormat.YMD_DASH)});
        }

    }

    function onChangeEndDateHandler(date: Date) {
        if (confirm("종료 날짜를 수정하시겠습니까?")) {
            editTaskById({_id:currentTask._id, key:'end', value: formatDateToStr(date, DateFormat.YMD_DASH)});
        }
    }

    return (
        <section className='w-full flex justify-between items-center border border-black'>
            <span className='header-xl'>{currentTask.description}</span>
            <FromToDatePicker
                startDate={new Date(currentTask.start)}
                endDate={new Date(currentTask.end)}
                onChangeStartDate={onChangeStartDateHandler}
                onChangeEndDate={onChangeEndDateHandler}
            />
        </section>
    );
}

export default TaskDetailViewHeader;