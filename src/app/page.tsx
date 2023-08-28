import React from 'react';
import CalendarSection from "@/components/CalendarSection";
import TodoSection from "@/components/TodoSection";


export default function Home() {
    return (
        <>
            <main className="flex flex-wrap">
                <TodoSection/>
                <CalendarSection/>
            </main>
        </>
    );
}
