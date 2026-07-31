import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { CreatePost, DeletePost, EditPost, GetMember, GetMemberResumeResult, GetProfileByMember, UpdateCandidateStatus } from '../controller/hr.js'

const route = express.Router()

route.get('/members', authMiddleware, GetMember)
route.get('/member/profile', authMiddleware, GetProfileByMember)
route.get('/members/:id', authMiddleware, GetMemberResumeResult)
route.post('/posts', authMiddleware , CreatePost)
route.put('/posts', authMiddleware, EditPost)
route.put('/members/:id', authMiddleware, UpdateCandidateStatus)
route.delete('/posts', authMiddleware, DeletePost)

export default route