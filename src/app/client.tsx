'use client';

import React from 'react';
import {RecoilRoot} from "recoil";

interface ClientProps {
    children:React.ReactNode;
}
function Client({children}:ClientProps) {
    return (
        <RecoilRoot>
            {children}
        </RecoilRoot>
    );
}

export default Client;