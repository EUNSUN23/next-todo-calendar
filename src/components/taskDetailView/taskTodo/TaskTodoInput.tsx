import React from 'react';
import CustomCheckbox from "@/components/ui/CustomCheckbox";
import CustomInput from "@/components/ui/CustomInput";

interface TaskTodoInputProps {
    todoContents:string;
    onChangeHandler: (v:string) => void;
}
function TaskTodoInput({todoContents, onChangeHandler}:TaskTodoInputProps) {
    return (
        <div
            className='w-full flex space-x-4 items-center text-3xl mx-3 p-1 hoverColorChange-neutral-light-1'>
            <CustomCheckbox disabled={true}/>
            <CustomInput todoContents={todoContents} onChangeHandler={onChangeHandler}/>
        </div>
    );
}

export default TaskTodoInput;