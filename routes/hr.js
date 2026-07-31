import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { CreatePost, DeletePost, EditPost, GetMember, GetMemberResumeResult, GetProfileByMember } from '../controller/hr.js'

const route = express.Router()

route.post('/posts', authMiddleware , CreatePost)
route.put('/posts', authMiddleware, EditPost)
route.delete('/posts', authMiddleware, DeletePost)
route.get('/members', authMiddleware, GetMember)
route.get('/member/profile', authMiddleware, GetProfileByMember)
route.get('/members/:id', authMiddleware, GetMemberResumeResult)

export default route