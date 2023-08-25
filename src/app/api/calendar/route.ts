import {NextResponse} from "next/server";
import {getEvents} from "@/service/calendar";

// /products api호출시 제품 목록 조회
export async function GET(request:Request){
    const events = await getEvents();
    return NextResponse.json({events});
}