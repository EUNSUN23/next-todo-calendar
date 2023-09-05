'use client';
import React, {useEffect, useState} from 'react';
import Calendar from "@/components/Calendar";
// import Calendar from "@/components/Calendar";

function CalendarSection() {
    const [tasks, setTasks] = useState([]);
    // todo 이번달에 해당하는 모든 event 조회해서 Calendar컴포넌트에 넘겨주기.
    useEffect(()=>{

        async function getTasks(){
            const res = await fetch("/api/calendar");
            const data = await res.json();
            for(const task of data.tasks){
                task.title = task.description;
                switch(task.level){
                    case '1':
                        task.color = 'var(--color-minor)';
                        break;
                    case '2':
                        task.color = 'var(--color-common)';
                        break;
                    case '3':
                        task.color = 'var(--color-important)';
                        break;
                    default:
                        task.color = 'var(--color-common)';
                }
            }
            setTasks(data.tasks);
        }

        getTasks();

    },[]);

    return (
        <section className='flex-1'>
            <Calendar events={tasks}/>
        </section>
    );
}

export default CalendarSection;