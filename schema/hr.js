const createPostSchema = {
    title : {
        type : 'string',
        required : true
    },
    faculty : {
        type : 'string',
        required : true
    },
    description : {
        type : 'string',
        required : true
    },
    deadline : {
        type : 'string',
        required : true
    }
}

const editPostSchema = {
    title : {
        type : 'string',
        required : false
    },
    faculty : {
        type : 'string',
        required : false
    },
    description : {
        type : 'string',
        required : false
    },
    deadline : {
        type : 'string',
        required : false
    }
}

const updateCandidateStatusSchema = {
    status : {
        type : ['pending', 'accepted', 'rejected'],
        required : false,
        default : 'pending'
    }
}

export {createPostSchema, editPostSchema, updateCandidateStatusSchema}