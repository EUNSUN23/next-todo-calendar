'use client';
import React, {useEffect, useState} from 'react';
import Calendar from "@/components/Calendar";
// import Calendar from "@/components/Calendar";

function CalendarSection() {
    const [events, setEvents] = useState([]);
    // todo 이번달에 해당하는 모든 event 조회해서 Calendar컴포넌트에 넘겨주기.
    useEffect(()=>{

        async function getEvents(){
            const res = await fetch("/api/calendar");
            const data = await res.json();
            console.log("data: ",data);
            for(const eventItem of data.events){
                eventItem.start = eventItem.start.substring(0,4) + "-" + eventItem.start.substring(4,6) + "-" + eventItem.start.substring(6,8);
                eventItem.end = eventItem.end.substring(0,4) + "-" + eventItem.end.substring(4,6) + "-" + eventItem.end.substring(6,8);
            }
            setEvents(data.events);
        }

        getEvents();

    },[]);

    return (
        <section className='flex-1'>
            <Calendar events={events}/>
        </section>
    );
}

export default CalendarSection;