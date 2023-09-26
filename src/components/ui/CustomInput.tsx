'use client';
import React, {useState} from 'react';
import {BiWindow} from "react-icons/bi";

type Props = {
    todoContents:string;
    onChangeHandler:(value:string) => void;
};

function CustomInput({todoContents, onChangeHandler}:Props) {
    const [placeholder, setPlaceholder] = useState('업무 입력');


    return (
        <div className='relative'>
            <input
                type="text"
                placeholder={placeholder}
                className='relative ml-3 bg-transparent outline-none z-10 py-1'
                onChange={(e) => {
                    onChangeHandler(e.target.value);
                    if(e.target.value === "") setPlaceholder('업무 입력');
                }}
                spellCheck={false}
                value={todoContents}
            />

            <div className='flex items-center absolute top-0 left-2 z-0 space-x-1'>
                    <div className={`flex px-1 pb-1`}>
                        <div className='whitespace-nowrap text-transparent' >{todoContents}</div>
                    </div>
                {todoContents.length > 0 && <BiWindow size={22} className='cursor-pointer opacity-0 hover:opacity-100 transition opacity ease-in-out duration-100'/>}
            </div>
        </div>
    );
}

export default CustomInput;