export default {
    title:'Todo',
    name:'todo',
    type: 'document',
    fields:[
        {
            title:'GroupId',
            name:'groupId',
            type:'string'
        },
        {
            title:'Contents',
            name:'contents',
            type:'string'
        },
        {
            title:'Finish',
            name:'finish',
            type:'boolean'
        },
        {
            title:'CreatedBy',
            name:'createdBy',
            type:'reference',
            to:[{type:'user'}]
        },
        {
            title: 'UpdateDate',
            name : 'updateDate',
            type : 'string'
        },
        {
            title: 'Assignee',
            name : 'assignee',
            type:'array',
            of:[
                {
                    type:'reference',
                    to:[{type:'user'}]
                }
            ]
        }
    ],
    preview:{
        select:{
            contents:'contents'
        },
        prepare({contents}){
            return {
                title:contents
            }
        }
    }
}