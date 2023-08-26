import React from 'react';
import Calendar from "@/components/Calendar";
// import Calendar from "@/components/Calendar";

async function CalendarSection() {
    // todo 이번달에 해당하는 모든 event 조회해서 Calendar컴포넌트에 넘겨주기.
    const res = await fetch("/api/calendar");
    const data = await res.json();

    console.log("data: ",data);

    return (
        <section className='flex-1'>
            <Calendar events={data.events}/>
        </section>
    );
}

export default CalendarSection;