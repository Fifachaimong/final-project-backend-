import bcrypt from "bcryptjs"
import { CreateMember, CreateResume, CreateUser, EditMyProfileModel, GetMemberByUserAndPost, GetMyProfileModel, GetPostModel, GetUserByEmail } from "../models/auth.js"
import AppError from '../utils/AppError.js'
import jwt from 'jsonwebtoken'
import { UploadToSupabase } from "../utils/UploadToSupabase.js";
import axios from "axios"

export const RegisterService = async (data) => {
    const { firstname, lastname, email, password, role } = data
    const user = await GetUserByEmail(email)
    if (user) {
        throw new AppError('This email is already in use', 409)
    }

    const hashpassword = await bcrypt.hash(password, 10)
    const NewData = {
        firstname,
        lastname,
        email,
        password : hashpassword,
        role
    }

    await CreateUser(NewData)
    return {
        message : 'Register succeed'
    }
}

export const LoginService = async (data) => {
    const { email, password } = data
    const user = await GetUserByEmail(email)
    if (!user) {
        throw new AppError('Incorrect email or password.', 401)
    }

    const check = await bcrypt.compare(password, user.password)
    if (!check) {
        throw new AppError('Incorrect email or password.', 401)
    }

    const token = jwt.sign(
        {
            id : user.id,
            role : user.role
        },
        process.env.JWT_TOKEN,
        { expiresIn : '15m' }
    )

    return {
        message : 'Login succeed',
        token : token
    }
}

export const GetPostService = async () => {
    const result = await GetPostModel()

    return {
        message : 'Get post succeed',
        data : result
    }
} 


export const ApplyResumeService = async (
    userId,
    postId,
    files
) => {

    const member = await GetMemberByUserAndPost(
        userId,
        postId
    );

    if (member) {
        throw new AppError(
            "You already applied",
            409
        );
    }


    const resume = files.resume?.[0];
    const transcript = files.transcript?.[0];


    if (!resume || !transcript) {
        throw new AppError(
            "Please upload resume and transcript",
            400
        );
    }


    const resumeUpload = await UploadToSupabase(
        resume.buffer,
        resume.mimetype,
        "resume",
        resume.originalname
    );


    const transcriptUpload = await UploadToSupabase(
        transcript.buffer,
        transcript.mimetype,
        "transcript",
        transcript.originalname
    );


    const memberResult = await CreateMember(
        userId,
        postId
    );


    const memberId = memberResult.insertId;


    await CreateResume(
        memberId,
        resumeUpload.publicUrl,
        transcriptUpload.publicUrl
    );


    return {
        message: "Apply resume succeed",
        resume_url: resumeUpload.publicUrl,
        transcript_url: transcriptUpload.publicUrl
    };
};



export const EditMyProfileService = async (id, data) => {
    const check = await EditMyProfileModel(id, data)
    if (!check.affectedRows === 0) {
        throw new AppError('User not found', 404)
    }

    return {
        message : 'Edit my profile succeed'
    }
}

export const GetMyProfileService = async (id) => {
    const data = await GetMyProfileModel(id)
    if(!data) {
        throw new AppError('User not found', 404)
    }

    return {
        message : 'Get my profile succeed',
        data : data
    }
}

export const GetMyApplicationResultService = async (id) => {
    const data = await GetMyApplicationResultModel(id)

    if (!data) {
        throw new AppError('No application found for this user', 404)
    }

    return {
        message : 'Get my application',
        data : data
    }
}   