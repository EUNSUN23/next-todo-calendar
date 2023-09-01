export default {
    title: 'Task',
    name: 'task',
    type: 'document',
    fields: [
        {
            title: 'GroupId',
            name: 'groupId',
            type: 'string'
        },
        {
            title: 'Description',
            name: 'description',
            type: 'string',
        },
        {
            title: 'Start',
            name: 'start',
            type: 'string',
        },
        {
            title: 'End',
            name: 'end',
            type: 'string',
        },
        {
            title: 'Color',
            name: 'color',
            type: 'string',
        },
        {
            title: 'BackgroundColor',
            name: 'BackgroundColor',
            type: 'string',
        },
        {
            title: 'ClassName',
            name: 'className',
            type: 'string',
        },
        {
            title: 'Finish',
            name: 'finish',
            type: 'boolean'
        },
        {
            title:'Note',
            name:'note',
            type:'reference',
            to:[{type:'note'}]
        },
        {
            title:'Todo',
            name:'todo',
            type:'reference',
            to:[{type:'todo'}]
        },
        {
            title:'CreatedBy',
            name:'createdBy',
            type:'reference',
            to:[{type:'user'}]
        },

    ]
}