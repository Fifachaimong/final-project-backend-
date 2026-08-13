import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { createPostSchema, editPostSchema, updateCandidateStatusSchema } from '../schema/hr.js'
import { ValidateBody } from '../middleware/validate.js'
import { CreatePost, DeletePost, EditPost, GetMember, GetMemberResumeResult, GetProfileByMember, UpdateCandidateStatus } from '../controller/hr.js'

const route = express.Router()

route.get('/members', authMiddleware, GetMember)
route.get('/members/profile/:id', authMiddleware, GetProfileByMember)
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
 *                   user_id: 6
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

/**
 * @swagger
 * /hr/members/profile/{id}:
 *   get:
 *     summary: Get member profile
 *     description: Retrieve a member profile by user ID.
 *     tags:
 *       - hr
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Member user ID
 *         example: 6
 *     responses:
 *       200:
 *         description: Member profile retrieved successfully
 *         content:
 *           application/json:
 *             example:
 *               message: "Get member profile succeed"
 *               data:
 *                 user_id: 6
 *                 user_firstname: "Golf"
 *                 user_lastname: "Matin"
 *                 user_email: "Golfy@gmail.com"
 *                 user_phone: "099999999"
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
 *       404:
 *         description: Member not found
 *         content:
 *           application/json:
 *             example:
 *               message: "Member not found"
 *
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               message: "Internal server error"
 */

/**
 * @swagger
 * /hr/members/{id}:
 *   get:
 *     summary: Get member resume analysis
 *     description: Retrieve the AI analysis result of a member's resume.
 *     tags:
 *       - hr
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the member
 *         example: 2
 *
 *     responses:
 *       200:
 *         description: Member resume analysis retrieved successfully
 *         content:
 *           application/json:
 *             example:
 *               message: "Get analysis of members resumes"
 *               data:
 *                 ai_score: "65.90"
 *                 ai_analysis: "The candidate has strong technical skills and relevant experience for this position."
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
 *       404:
 *         description: Member not found
 *         content:
 *           application/json:
 *             example:
 *               message: "Member not found"
 *
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               message: "Internal server error"
 */
