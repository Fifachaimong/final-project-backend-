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

/**
 * @swagger
 * /hr/members:
 *   get:
 *     summary: Get HR members
 *     description: Retrieve a list of members for HR.
 *     tags:
 *       - hr
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Members retrieved successfully
 *         content:
 *           application/json:
 *             example:
 *               message: "Get my member succeed"
 *               data:
 *                 - Post_id: 6
 *                   user_firstname: "Golf"
 *                   user_lastname: "Matin"
 *                   ai_score: "65.90"
 *
 *       401:
 *         description: Unauthorized - Missing or invalid token
 *         content:
 *           application/json:
 *             examples:
 *               missing_token:
 *                 summary: Missing token
 *                 value:
 *                   message: "Unauthorization"
 *               invalid_token:
 *                 summary: Invalid token
 *                 value:
 *                   message: "Invalid token"
 *
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               message: "Internal server error"
 */