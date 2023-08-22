import React from 'react';
import Header from "@/components/Header";


export default function Home() {
    return (
        <>
            <div className="max-w-[120rem] my-32 mx-auto bg-[var(--color-grey-light-2)] shadow-[var(--shadow-dark)] min-h-[50rem]">
                <Header/>
                <section className="flex flex-wrap">
                    <section className='border border-black basis-full md:basis-1/3 lg:basis-1/4'>
                        <h2 className='text-3xl'>오늘의 TO DO</h2>
                    </section>
                    <main className="flex-1">
                        <h3>content 1</h3>
                    </main>
                </section>
            </div>
        </>
    );
}
