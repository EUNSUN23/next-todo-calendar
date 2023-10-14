'use client';
import React, {useState} from 'react';

type Props = {
    todoContents: string;
    onChangeHandler?: (value: string) => void;
    isReadOnly?: boolean;
};

function CustomInput({todoContents, onChangeHandler, isReadOnly = false}: Props) {
    const [placeholder, setPlaceholder] = useState('업무 입력');


    return (
        <div className='relative ml-1 mr-4 min-h-[2.3rem]'>
            <div className='relative flex items-center space-x-1 z-10'>
                <div className='whitespace-nowrap text-transparent'>{todoContents}</div>
            </div>
            <input
                type="text"
                placeholder={placeholder}
                className='absolute top-0 left-2 z-0  bg-transparent outline-none'
                onChange={(e) => {
                    if (onChangeHandler !== undefined) onChangeHandler(e.target.value);
                    if (e.target.value === "") setPlaceholder('업무 입력');
                }}
                spellCheck={false}
                value={todoContents}
                readOnly={isReadOnly}
            />

        </div>
    );
}

export default CustomInput;