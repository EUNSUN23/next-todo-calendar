'use client';

import React, {ChangeEvent, useState} from 'react';
import CustomCheckbox from "@/components/ui/CustomCheckbox";
import CustomInput from "@/components/ui/CustomInput";

interface TaskTodoInputProps {
    initContents: string;
    children:React.ReactElement;
}
function TaskTodoInput({initContents, children}:TaskTodoInputProps) {
    const [todoContents, setTodoContents] = useState(() => initContents);
    const [checked, setChecked] = useState(false);
    const [isReadOnly, setIsReadOnly] = useState(false);

    function onChangeCheckboxHandler(e:ChangeEvent<HTMLInputElement>){
        console.log("e.target.checked: ",e.target.checked);
        console.log("check!!!")
        setChecked(e.target.checked);
    }

    return (
        <div
            className='w-full flex items-center text-3xl p-1 hoverColorChange-neutral-light-1'>
            <CustomCheckbox checked={checked} onChangeHandler={onChangeCheckboxHandler}  disabled={false}/>
            <CustomInput todoContents={todoContents} onChangeHandler={(v:string) => setTodoContents(v)} isReadOnly={isReadOnly} />
            {children}
        </div>
    );
}

export default TaskTodoInput;