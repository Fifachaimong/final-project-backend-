import asyncHandler from "express-async-handler"
import { ApplyResumeService, EditMyProfileService, GetMyProfileService, GetPostService, LoginService, RegisterService } from "../service/auth.js"


export const Register = asyncHandler(async(req, res) => {
    const data = req.body
    const result = await RegisterService(data)
    res.status(201).json(result)
})

export const Login = asyncHandler(async(req, res) => {
    const data = req.body
    const result = await LoginService(data)
    res.status(200).json(result)
})

export const GetPost = asyncHandler(async (req, res) => {
    const result = await GetPostService()
    res.status(200).json(result)
})

export const ApplyResume = asyncHandler(async (req, res) => {
  const result = await ApplyResumeService( req.user.id, req.params.postId, req.files, req.body)
  res.status(201).json(result)
})

export const EditMyProfile = asyncHandler(async (req, res) => {
    const result = await EditMyProfileService(req.user.id, req.body)
    res.status(200).json(result)
})

export const GetMyProfile = asyncHandler(async (req, res) => {
    const result = await GetMyProfileService(req.user.id)
    res.status(200).json(result)
})

export const GetMyApplicationResult = asyncHandler(async (req, res) => {
    const result = await GetMyApplicationResultService(req.user.id)
    res.status(200).json(result)
})