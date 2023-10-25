import {atom, selector} from "recoil";
import {Todo} from "@/utils/types";


interface CurrentTaskTodoState {
    currentTaskTodo: Todo;
    currentTaskTodoId: string;
    isOnHover: boolean;
}


export const currentTaskTodoStateStore = atom<CurrentTaskTodoState>({
    key: 'currentTaskTodoStateStore',
    default: {
        currentTaskTodo: {},
        currentTaskTodoId: '',
        isOnHover: false
    }
});

export interface TaskTodoTab {
    name: string;
    id: string;
}

export const taskTodoTabListStateStore = atom<TaskTodoTab[]>({
    key: 'taskTodoTabListStateStore',
    default: [{name: '업무 목록', id: 'taskTodoList'}]
});

export const currentTaskTodoTabSelector = selector<TaskTodoTab>({
    key: 'currentTaskTodoTabSelector',
    get: ({get}) => {
        const {currentTaskTodoId} = get(currentTaskTodoStateStore);
        const id = currentTaskTodoId ? currentTaskTodoId : 'taskTodoList';
        return get(taskTodoTabListStateStore).find(v => v.id === id);
    }
});

export const taskTodoTabOpenStateSelector = selector<{isTodoTabOpen:boolean}>({
    key:'taskTodoTabOpenStateSelector',
    get:({get}) => {
        const currentTaskTodoTab  = get(currentTaskTodoTabSelector);
        return {isTodoTabOpen: currentTaskTodoTab && currentTaskTodoTab.id !== 'taskTodoList'};
    }
});
