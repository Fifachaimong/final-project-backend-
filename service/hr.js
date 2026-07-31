import { GetUserByID } from "../models/auth.js";
import { CreatePostModel, DeletePostModel, EditPostModel, GetMemberModel, GetMemberResumeResultModel, GetProfileByMemberModel } from "../models/hr.js";
import AppError from "../utils/AppError.js";

export const CreatePostService = async (id, data) => {
    const check = await GetUserByID(id)
    if (check.length === 0) {
        throw new AppError('User not found', 404)
    }

    await CreatePostModel(id, data)

    return {
        message : 'Create post succeed'
    }
}

export const EditPostService = async (data, owner_id) => {
    const check = await EditPostModel(data, owner_id)
    if (check.affectedRows === 0) {
        throw new AppError('You do not have permission to edit the post.', 403)
    }

    return {
        message : 'Edit posts succeed'
    }
}

export const DeletePostService = async (id, title) => {
    const check = await DeletePostModel(id, title)
    if (check.affectedRows === 0) {
        throw new AppError('You cannot delete the post.', 403)
    }

    return {
        message : 'Delete post succeed'
    }
}

export const GetMemberService = async (owner_id) => {
    const data = await GetMemberModel(owner_id)
    
    return {
        message : 'Get my member succeed',
        data : data
    }
}

export const GetProfileByMemberService = async (member_id, owner_id) => {
    const data = await GetProfileByMemberModel(member_id, owner_id)
    console.log(data)
    if (!data) {
        throw new AppError('Member not found', 404)
    }

    return {
        message : 'Get profile member succeed',
        data : data
    }
}

export const GetMemberResumeResultService = async (member_id, owner_id) => {
    const data = await GetMemberResumeResultModel(member_id, owner_id)
    
    if (!data) {
        throw new AppError('Member not found', 404)
    }

    return {
        message : 'Get analysis of members resumes',
        data : data
    }
}