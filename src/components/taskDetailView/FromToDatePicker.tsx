'use client';
import React, {forwardRef, LegacyRef, ReactNode} from 'react';
import DatePicker from "react-datepicker";
import {BsDash} from "react-icons/bs";
import "react-datepicker/dist/react-datepicker.css";
import {ko} from 'date-fns/esm/locale';



type Props = {
    startDate: Date;
    endDate: Date;
    onChangeStartDate: (date:Date) => void;
    onChangeEndDate : (date:Date) => void;
}

type CustomInputProps = {
    value?:Date | null;
    onClick?: () => void | null;
}

// eslint-disable-next-line react/display-name
const CustomDatePickerInput = forwardRef(({ value, onClick }:CustomInputProps, ref : LegacyRef<HTMLButtonElement>) => (
    <button className="fc-button fc-button-primary" onClick={onClick} ref={ref}>
        {value as ReactNode}
    </button>
));

function FromToDatePicker({startDate, endDate, onChangeStartDate, onChangeEndDate}:Props) {

    return (
        <section className='flex items-center mx-3 text-xl text-[var(--color-gray-dark-3)]'>
            <span className='fc mx-1.5'>
                <DatePicker
                    locale={ko}
                    dateFormat="yyyy-MM-dd"
                    maxDate={endDate}
                    selected={startDate}
                    onChange={onChangeStartDate}
                    customInput={<CustomDatePickerInput />}
                />
            </span>
            <BsDash/>
            <span className='fc mx-1.5'>
                <DatePicker
                    locale={ko}
                    dateFormat="yyyy-MM-dd"
                    minDate={startDate}
                    selected={endDate}
                    onChange={onChangeEndDate}
                    customInput={<CustomDatePickerInput/>}
                />
            </span>
        </section>
    );
}

export default FromToDatePicker;