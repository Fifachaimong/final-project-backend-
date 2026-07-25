import asyncHandler from "express-async-handler";
import { CreatePostService, DeletePostService, EditPostService, GetMemberService, GetProfileByMemberService } from "../service/hr.js";

export const CreatePost = asyncHandler(async (req, res) => {
    const data = req.body
    const result = await CreatePostService(req.user.id, data)
    res.status(201).json(result)
})

export const EditPost = asyncHandler(async (req, res) => {
    const data = req.body
    const result = await EditPostService(data, req.user.id)
    res.status(200).json(result)
})

export const DeletePost = asyncHandler(async (req, res) => {
    const { title } = req.body
    const result = await DeletePostService(req.user.id, title)
    res.status(200).json(result)
})

export const GetMember = asyncHandler(async (req, res) => {
    const result = await GetMemberService(req.user.id)
    res.status(200).json(result)
})

export const GetProfileByMember = asyncHandler(async (req, res) => {
    const result = await GetProfileByMemberService(req.body.id, req.user.id)
    res.status(200).json(result)
})
 
