import _ from "lodash";
import {DateFormat} from "@/utils/constant";



export function formatDateToStr(date:Date, format: DateFormat.YMD | DateFormat.YMD_DASH){
    const year = date.getFullYear().toString();
    const month = _.padStart((date.getMonth() + 1).toString(),2,"0");
    const dateStr = _.padStart((date.getDate()+1).toString(),2 ,"0");

    const fullArr = [year, month, dateStr];

    if(format === DateFormat.YMD){
        return fullArr.join("");
    }

    return fullArr.join("-");
}