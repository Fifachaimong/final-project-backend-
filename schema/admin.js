const createUserSchema = {
    firstname : {
        type : 'string',
        required : true
    },
    lastname : {
        type : 'string',
        required : true
    },
    email : {
        type : 'string',
        required : true
    },
    password : {
        type : 'string',
        required : true
    },
    role : {
        type : ['applicant', 'hr', 'admin'],
        required : false,
        default : 'applicant'
    }
}

const editUserSchema = {
    firstname : {
        type : 'string',
        required : false
    },
    lastname : {
        type : 'string',
        required : false
    },
    password : {
        type : 'string',
        required : false
    },
    role : {
        type : ['applicant', 'hr', 'admin'],
        required : false,
        default : 'applicant'
    }
}

export {createUserSchema, editUserSchema}