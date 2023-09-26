export type Note = {
    _id: string;
    id: string;
    groupId: string;
    contents: string;
    createdBy: User;
    updateDate: string;
}

export type Todo = {
    finish: boolean;
    assignee: User[]
} & Note

export type User = {
    _id: string;
    name: string;
    userName: string;
    phone: string;
    createdAt: string;
}

export type Task = {
    _id: string;
    groupId: string;
    description: string;
    start: string;
    end: string;
    level: string;
    finish: boolean;
    notes: Note[] | [];
    todos: Todo[] | [];
    createdBy?: User | Record<string, never>;
}

export type TaskEditRequestVo = {
    _id:string;
    key: string;
    value: string | boolean | Task | Task[] | Note | Note[] | Todo | Todo[] | User | User[];

}

export type TaskTodoRequestVo = {
    groupId: string;
    editTargetField?:string,
    editTargetValue?: string | boolean | User,
    todo?:Todo
}

export type ReactChildNode = {
    children: React.ReactNode
}