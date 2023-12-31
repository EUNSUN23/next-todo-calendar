import React from 'react';
import './globals.css'
import type {Metadata} from 'next'
import {Open_Sans} from 'next/font/google'
import QueryClientProviderWrapper from "@/components/QueryClientProviderWrapper";
import {RecoilRoot} from "recoil";
import Client from "@/app/client";
import Header from "@/components/Header";

const sans = Open_Sans({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Todo Calendar',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={sans.className}>
        <body>
        <div className="container">
            <Client>
                <Header/>
                <main className="flex flex-wrap">
                    <QueryClientProviderWrapper>
                        {children}
                    </QueryClientProviderWrapper>`
                </main>
            </Client>
        </div>
        </body>
        </html>
    )
}
