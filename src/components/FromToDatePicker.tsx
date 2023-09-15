'use client';
import React from 'react';
import DatePicker from "react-datepicker";
import {BsCalendarWeek} from "react-icons/bs";
import "react-datepicker/dist/react-datepicker.css";


type Props = {
    startDate: Date;
    endDate: Date;
    onChangeStartDate: (date:Date) => void;
    onChangeEndDate : (date:Date) => void;
}
function FromToDatePicker({startDate, endDate, onChangeStartDate, onChangeEndDate}:Props) {
    return (
        <section className='px-1.5 text-2xl text-[var(--color-gray-dark-3)]'>
            <span>
                <DatePicker selected={startDate} onChange={onChangeStartDate}/>
                <BsCalendarWeek/>
            </span>
            <span>&#45;</span>
            <span>
                <DatePicker selected={endDate} onChange={onChangeEndDate}/>
                <BsCalendarWeek/>
            </span>
        </section>
    );
}

export default FromToDatePicker;