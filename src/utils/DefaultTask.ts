import {Note, Task, Todo, User} from "@/utils/types";

export class DefaultTask implements Task {
    _id: string = '' ;
    createdBy: User | Record<string, never> = {};
    description: string = '';
    end: string = '';
    finish: boolean = false;
    groupId: string = '';
    level: string = '';
    notes: Note[] | [] = [];
    start: string = '';
    todos: Todo[] | [] = [];

}