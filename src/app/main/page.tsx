import React from 'react';
import TodoSection from "@/components/TodoSection";
import CalendarSection from "@/components/CalendarSection";
import Header from "@/components/Header";

function MainPage() {
    return (
        <>
            <Header/>
            <main className="flex flex-wrap">
                <TodoSection/>
                <CalendarSection/>
            </main>
        </>

    );
}

export default MainPage;