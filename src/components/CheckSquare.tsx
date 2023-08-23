'use client';
import React, {useState} from 'react';
import {FiCheckSquare} from "react-icons/fi";

type Props = {
    id:string;
}
function CheckSquare({ id}:Props) {
    const [checked, setChecked] = useState(false);

    function onClickCheckSquare({target:{id}}){
        setChecked((checked) => !checked);
        // todo - 데이터베이스에 해당 id의 todo상태(완/미완) 저장
        console.log("checked/unchecked id: ", id);
    }

    const iconColor = checked ? 'text-[var(--color-gray-dark)]':'text-gray-400';

    return (
        <FiCheckSquare onClick={onClickCheckSquare} id={id} className={`${iconColor} cursor-pointer`} />
    );
}

export default CheckSquare;