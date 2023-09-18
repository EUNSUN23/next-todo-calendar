'use client';
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import {useTasks} from "@/hooks/useTasks";


export default function Calendar() {

    // const queryClient = useQueryClient();

    const {tasks, isLoading} = useTasks();
    if(isLoading) return <h3>loading</h3>

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
                    navLinkDayClick={(date) => {
                        console.log('day', date.toISOString());
                    }}
                    events={tasks}
                />
    )
}
