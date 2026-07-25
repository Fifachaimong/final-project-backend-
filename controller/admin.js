import asyncHandler from "express-async-handler"
import { CreateUserByAdminService, DeleteUserService, EditUserService } from "../service/admin.js"


export const CreateUserByAdmin = asyncHandler(async (req, res) => {
    const data = req.body
    const result = await CreateUserByAdminService(data)
    res.status(201).json(result)
})

export const DeleteUser = asyncHandler(async (req, res) => {
    const result = await DeleteUserService(req.body.id)
    res.status(200).json(result)
})

export const EditUser = asyncHandler(async (req, res) => {
    const result = await EditUserService(req.body)
    res.status(200).json(result)
})