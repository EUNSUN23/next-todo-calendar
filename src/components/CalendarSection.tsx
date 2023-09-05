'use client';
import React, {useEffect, useState} from 'react';
import Calendar from "@/components/Calendar";
// import Calendar from "@/components/Calendar";

function CalendarSection() {
    const [tasks, setTasks] = useState([]);
    // todo 이번달에 해당하는 모든 event 조회해서 Calendar컴포넌트에 넘겨주기.
    useEffect(()=>{

        async function getEvents(){
            const res = await fetch("/api/calendar");
            const data = await res.json();
            console.log("data: ",data);
            for(const task of data.tasks){
                task.title = task.description;
                task.start = task.start.substring(0,4) + "-" + task.start.substring(4,6) + "-" + task.start.substring(6,8);
                task.end = task.end.substring(0,4) + "-" + task.end.substring(4,6) + "-" + task.end.substring(6,8);
            }
            setTasks(data.tasks);
        }

        getEvents();

    },[]);

    return (
        <section className='flex-1'>
            <Calendar events={tasks}/>
        </section>
    );
}

export default CalendarSection;