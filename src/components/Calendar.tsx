'use client';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import {Task} from "@/components/CalendarSection";


export default function Calendar({tasks}:Task[]) {
    console.log("tasks: ",tasks);

    return (
                <FullCalendar
                    plugins={[
                        dayGridPlugin
                    ]}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth'
                    }}
                    initialView='dayGridMonth'
                    nowIndicator={true}
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    navLinks={true}
                    navLinkDayClick={(date, jsEvent) => {
                        console.log('day', date.toISOString());
                        console.log('coords', jsEvent.pageX, jsEvent.pageY);
                    }}
                    events={tasks}
                />
    )
}
