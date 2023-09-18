'use client';
import React, {useState} from 'react';
import {FiCheckSquare} from "react-icons/fi";

type Props = {
    id:string;
}
function CheckSquare({id}:Props) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [checked, setChecked] = useState(false);


    const iconColor = checked ? 'text-[var(--color-gray-dark)]':'text-gray-400';

    return (
        <FiCheckSquare id={id} className={`${iconColor} cursor-pointer`} />
    );
}

export default CheckSquare;