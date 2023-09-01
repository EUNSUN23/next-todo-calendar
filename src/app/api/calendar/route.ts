import {NextResponse} from "next/server";
import {getEvents} from "@/service/calendar";

export async function GET(request:Request){
    const events = await getEvents();
    return NextResponse.json({events});
}