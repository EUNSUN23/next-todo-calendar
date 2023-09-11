import React from 'react';
import TodoSection from "@/components/TodoSection";
import CalendarSection from "@/components/CalendarSection";
import Header from "@/components/Header";
import {CurrentTaskProvider} from "@/context/CurrentTaskContext";

function MainPage() {
    return (
        <>
            <Header/>
            <main className="flex flex-wrap">
                <CurrentTaskProvider>
                    <TodoSection/>
                    <CalendarSection/>
                </CurrentTaskProvider>
            </main>
        </>

    );
}

export default MainPage;