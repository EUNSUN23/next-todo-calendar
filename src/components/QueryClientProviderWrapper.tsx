'use client';
import React, {useState} from 'react';
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";


type Props = {
    children:React.ReactNode;
}

function QueryClientProviderWrapper({children}:Props) {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false}/>
                {children}
        </QueryClientProvider>
    );
}

export default QueryClientProviderWrapper;