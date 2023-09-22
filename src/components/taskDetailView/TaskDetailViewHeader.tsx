import React from 'react';
import FromToDatePicker from "@/components/taskDetailView/FromToDatePicker";
import {formatDateToStr} from "@/utils/common";
import {DateFormat} from "@/utils/constant";
import {useEditTask} from "@/hooks/useEditTask";
import {Task} from "@/utils/types";

type Props = {
    task:Task;
}
function TaskDetailViewHeader({task}:Props) {
    const {isEditing, editTaskById} = useEditTask();
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
        <section className='w-full flex justify-between items-center border border-black'>
            <span className='header-xl'>{task.description}</span>
            <FromToDatePicker
                startDate={new Date(task.start)}
                endDate={new Date(task.end)}
                onChangeStartDate={onChangeStartDateHandler}
                onChangeEndDate={onChangeEndDateHandler}
            />
        </section>
    );
}

export default TaskDetailViewHeader;