import React from 'react';
import TaskSection from "@/components/TaskSection";
import CalendarSection from "@/components/CalendarSection";
import Header from "@/components/Header";
import {CurrentTaskProvider} from "@/context/OpenTaskContext";

function MainPage() {
    return (
        <>
            <Header/>
            <main className="flex flex-wrap">
                <CurrentTaskProvider>
                    <TaskSection/>
                    <CalendarSection/>
                </CurrentTaskProvider>
            </main>
        </>

    );
}

export default MainPage;