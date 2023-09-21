'use client';
import React, {useState} from 'react';
import {BiWindow} from "react-icons/bi";

function CustomInput() {
    const [textValue, setInputTextValue] = useState('');
    const [placeholder, setPlaceholder] = useState('업무 입력');


    return (
        <div className='relative'>
            <input
                type="text"
                placeholder={placeholder}
                className={`ml-3 outline-none z-10 py-1`}
                onChange={(e) => {
                    setInputTextValue(e.target.value);
                    if(e.target.value === "") setPlaceholder('업무 입력');
                }}
            />

            <div className='flex items-center absolute top-0 left-2 z-0 space-x-1'>
                    <div className={`flex ${textValue.length > 0 && 'border-b border-[var(--color-neutral)]'} px-1 pb-1`}>
                        <div className='whitespace-nowrap text-transparent' >{textValue}</div>
                    </div>
                {textValue.length > 0 && <BiWindow size={22}/>}
            </div>
        </div>
    );
}

export default CustomInput;