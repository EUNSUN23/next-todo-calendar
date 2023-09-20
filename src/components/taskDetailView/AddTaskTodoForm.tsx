import React from 'react';
import {IoMdAdd} from "react-icons/io";
import {PiDotsSixVerticalBold} from "react-icons/pi";

function AddTaskTodoForm() {
    return (
        <div className='pl-16 relative'>
            <div
                className='absolute top-1/2 translate-y-[-50%] left-0 flex text-3xl text-[var(--color-neutral-dark)] '>
                <button className='hover-neutral-light-1'>
                    <IoMdAdd/>
                </button>
                <button className='hover-neutral-light-1'>
                    <PiDotsSixVerticalBold/>
                </button>
            </div>
            <div className='w-full text-3xl text-[var(--color-neutral-dark)]'>
                <input type="text" placeholder='업무 입력' className='outline-none py-2 px-3'/>
            </div>
        </div>
    );
}

export default AddTaskTodoForm;