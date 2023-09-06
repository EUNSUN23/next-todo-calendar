'use client';
import Calendar from "@/components/Calendar";

export type Note = {
    id: string;
    groupId: string;
    contents: string;
}

export type Todo = Note & {finish:boolean;}

export type User = {
    name:string;
    userName:string;
    phone:string;
    createdAt:string;
}

export type Task = {
    groupId:string;
    description: string;
    start: string;
    end: string;
    level: string;
    finish: boolean;
    notes:Note[] | [];
    todos:Todo[] | [];
    createdBy: User | Record<string, never>;
}

type Props = {
    tasks: Task[];
}

function CalendarSection({tasks}:Props) {

    return (
        <section className='flex-1'>
            <div className='calendar-container'>
                <Calendar tasks={tasks}/>
            </div>
        </section>
    );
}

export default CalendarSection;