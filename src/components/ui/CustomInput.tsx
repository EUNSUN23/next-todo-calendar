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

        </div>
    );
}

export default CustomInput;