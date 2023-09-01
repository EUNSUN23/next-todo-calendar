'use client';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
// full calendar 패키지 설치 : core + 플러그인들(core만으론 암것도 못함)
// npm install \
//   @fullcalendar/core \
//   @fullcalendar/daygrid \
//   @fullcalendar/timegrid \
//   @fullcalendar/list

export type CalendarEvent = {
    id: string;
    title: string;
    start: string;
    end: string;
    url: string;
    className: string;
    color: string;
    backGroundColor: string;
    borderColor: string;
    textColor: string;
}

export default function Calendar({events}:CalendarEvent[]) {
    console.log("events: ",events);

    return (
            <div className='calendar-container'>
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
                    events={events}
                />
            </div>
    )
}
