import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
// import interactionPlugin from '@fullcalendar/interaction'
// import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import timeGridPlugin from '@fullcalendar/timegrid'
import {CalendarEvent} from "@/service/calendar";

// full calendar 패키지 설치 : core + 플러그인들(core만으론 암것도 못함)
// npm install \
//   @fullcalendar/core \
//   @fullcalendar/daygrid \
//   @fullcalendar/timegrid \
//   @fullcalendar/list

type Props = {
    events:CalendarEvent[];
}

export default function Calendar({events}:Props) {
    return (
            <div className='calendar-container'>
                <FullCalendar
                    plugins={[
                        dayGridPlugin,
                        timeGridPlugin
                    ]}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek'
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
                    initialEvents={events}
                />
            </div>
    )
}
