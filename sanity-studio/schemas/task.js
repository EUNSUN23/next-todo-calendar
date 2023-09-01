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
            title: 'Level',
            name: 'level',
            type: 'string',
        },
        {
            title: 'Finish',
            name: 'finish',
            type: 'boolean'
        },
        {
            title:'Notes',
            name:'notes',
            type:'array',
            of:[
                {
                    type:'reference',
                    to:[{type:'note'}]
                }
            ]
        },
        {
            title:'Todos',
            name:'todos',
            type:'array',
            of:[
                {
                    type:'reference',
                    to:[{type:'todo'}]
                }
            ]

        },
        {
            title:'CreatedBy',
            name:'createdBy',
            type:'reference',
            to:[{type:'user'}]
        },

    ]
}