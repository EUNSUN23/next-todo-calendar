import {NextResponse} from "next/server";
import {getTasks} from "@/service/task";

export async function GET(){
    const tasks = await getTasks();
    return NextResponse.json({tasks});
}