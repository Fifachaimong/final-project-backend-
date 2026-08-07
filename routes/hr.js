import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { createPostSchema, editPostSchema, updateCandidateStatusSchema } from '../schema/hr.js'
import { ValidateBody } from '../middleware/validate.js'
import { CreatePost, DeletePost, EditPost, GetMember, GetMemberResumeResult, GetProfileByMember, UpdateCandidateStatus } from '../controller/hr.js'

const route = express.Router()

route.get('/members', authMiddleware, GetMember)
route.get('/member/profile', authMiddleware, GetProfileByMember)
route.get('/members/:id', authMiddleware, GetMemberResumeResult)
route.post('/posts', authMiddleware, ValidateBody(createPostSchema), CreatePost)
route.put('/posts/:id', authMiddleware, ValidateBody(editPostSchema), EditPost)
route.put('/members/:id', authMiddleware, ValidateBody(updateCandidateStatusSchema), UpdateCandidateStatus)
route.delete('/posts', authMiddleware, DeletePost)

export default route