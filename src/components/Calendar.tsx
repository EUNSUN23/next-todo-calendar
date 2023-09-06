'use client';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {getTasks} from "@/service/calendar";
import {Task} from "@/utils/types";


export default function Calendar() {

    // const queryClient = useQueryClient();

    const {tasks}:Task[] = useQuery({
        queryKey:['tasks'],
        queryFn: getTasks
    });

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
