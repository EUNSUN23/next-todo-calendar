import path from "path";
import {readFile} from "fs/promises";
import _ from "lodash";

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

export async function getEvents(){
    // 이번달에 start하는 이벤트 조회
    // todo 서버에서 데이터 조회해올것.
    const today = new Date();
    const year = today.getFullYear().toString();
    const month = _.padStart((today.getMonth() + 1).toString(),2,"0");

    const filePath = path.join(process.cwd(), 'data', 'events.json');
    return readFile(filePath, 'utf-8')
        .then<CalendarEvent[]>(JSON.parse)
        .then((events) => events.filter(event => event.start.substring(0,4) === year && event.start.substring(4,6) === month));
}