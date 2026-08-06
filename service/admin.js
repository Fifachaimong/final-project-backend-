import { CreateUserByAdminModel, DeleteUserByID, EditUserByIDModel } from "../models/admin.js"
import { GetUserByEmail } from "../models/auth.js"
import AppError from "../utils/AppError.js"
import bcrypt from "bcryptjs"

export const CreateUserByAdminService = async (data) => {
    const { name, lastname, email, password, role } = data
    const user = await GetUserByEmail(email)
    if (user) {
        throw new AppError('This email is already in use', 409)
    }

    const hashpassword = await bcrypt.hash(password, 10)
    const NewData = {
        name,
        lastname,
        email,
        password : hashpassword,
        role
    }

    await CreateUserByAdminModel(NewData)

    return {
        message : 'Create user succeed'
    }
}

export const DeleteUserService = async (id) => {
    const result = await DeleteUserByID(id)
    if (result.affectedRows === 0) {
        throw new AppError('User not found', 404)
    }

    return {
        message : "Delete user succeed"
    }
    
}

export const EditUserService = async (id, data) => {
    const { name, lastname, role } = data
    let { password } = data
    if (password) {
        password = await bcrypt.hash(password, 10)
    }

    const NewData = {
        id,
        name,
        lastname,
        password,
        role
    }

    const result = await EditUserByIDModel(NewData)
    if (result.affectedRows === 0) {
        throw new AppError('User not found', 404)
    }

    return {
        message : "Edit user succeed"
    }

}