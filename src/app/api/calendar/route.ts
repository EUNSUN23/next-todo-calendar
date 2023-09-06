import {NextResponse} from "next/server";
import {getTasks} from "@/service/calendar";

export async function GET(request:Request){
    const tasks = await getTasks();
    return NextResponse.json({tasks});
}