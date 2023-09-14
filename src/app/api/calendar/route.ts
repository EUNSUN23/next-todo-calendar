import {NextResponse} from "next/server";
import {getTasks} from "@/service/task";

export async function GET(request:Request){
    const tasks = await getTasks();
    return NextResponse.json({tasks});
}