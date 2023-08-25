import React from 'react';
// import Calendar from "@/components/Calendar";

async function CalendarSection() {
    // todo 이번달에 해당하는 모든 event 조회해서 Calendar컴포넌트에 넘겨주기.
    const events = await fetch("http://localhost:3000/api/calendar");

    console.log("res: ",events);

    return (
        <section className='flex-1'>
            {/*<Calendar events={}/>*/}
        </section>
    );
}

export default CalendarSection;