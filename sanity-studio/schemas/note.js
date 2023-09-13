export default {
    title:'Note',
    name:'note',
    type:'document',
    fields:[
        {
            title:'Id',
            name:'id',
            type:'string'
        },
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
            title:'CreatedBy',
            name:'createdBy',
            type:'reference',
            to:[{type:'user'}]
        },
        {
            title: 'UpdateDate',
            name : 'updateDate',
            type : 'string'
        }
    ]
}