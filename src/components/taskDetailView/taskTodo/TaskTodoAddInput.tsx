'use client';

import React, {ChangeEvent, useState} from 'react';
import CustomCheckbox from "@/components/ui/CustomCheckbox";
import CustomInput from "@/components/ui/CustomInput";

interface TaskTodoInputProps {
    todoContents:string;
    onChangeHandler: (v:string) => void;
    isCheckDisabled:boolean;
}
function TaskTodoAddInput({todoContents, onChangeHandler, isCheckDisabled}:TaskTodoInputProps) {
    const [checked, setChecked] = useState(false);


    function onChangeCheckboxHandler(e:ChangeEvent<HTMLInputElement>){
        console.log("e.target.checked: ",e.target.checked);
        console.log("check!!!")
        // console.log("checked: ",e.target.checked);
        setChecked(e.target.checked);
    }

    return (
        <div
            className='w-full flex space-x-4 items-center text-3xl mx-3 p-1 hoverColorChange-neutral-light-1'>
            <CustomCheckbox checked={checked} onChangeHandler={onChangeCheckboxHandler} disabled={isCheckDisabled}/>
            <CustomInput todoContents={todoContents} onChangeHandler={onChangeHandler}/>
        </div>
    );
}

export default TaskTodoAddInput;