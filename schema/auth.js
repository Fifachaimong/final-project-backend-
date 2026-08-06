const registerSchema = {
    name : {
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
        type : ['applicant', 'hr'],
        required : false,
        default : 'applicant'
    }
}

const loginSchema = {
    email : {
        type : 'string',
        required : true
    },
    password : {
        type : 'string',
        required : true
    }
}

export {registerSchema, loginSchema}