import {atom} from 'recoil';
import {Task} from "@/utils/types";
import {DefaultTask} from "@/utils/DefaultTask";

// three-divided
// four-divided
interface CurrentTaskState {
    currentTask: Task | DefaultTask;
    currentTaskId:string;

}

export const currentTaskStateStore = atom<CurrentTaskState>({
    key: 'currentTaskStateAtom',
    default: {
        currentTask: new DefaultTask(),
        currentTaskId:''
    }
});
