import {NextResponse} from "next/server";
import {getEvents, getTasks} from "@/service/calendar";

export async function GET(request:Request){
    // const events = await getEvents();
    const tasks = await getTasks();
    return NextResponse.json({tasks});
}