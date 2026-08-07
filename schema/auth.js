const registerSchema = {
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

const editMyProfileSchema = {
    firstname : {
        type : 'string',
        required : false
    },
    lastname : {
        type : 'string',
        required : false
    },
    phone : {
        type : 'string',
        required : false
    }
}

export {registerSchema, loginSchema, editMyProfileSchema}