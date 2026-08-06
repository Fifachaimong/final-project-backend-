import express from "express";
import { ApplyResume, EditMyProfile, GetMyApplicationResult, GetMyProfile, GetPost, Login, Register } from "../controller/auth.js";
import schema from "../schema/auth.js";
import { ValidateBody } from "../middleware/validate.js";
import upload from "../middleware/upload.js";
import authMiddleware from "../middleware/authMiddleware.js";

const routes = express.Router()

routes.post('/register', ValidateBody(schema), Register)
routes.post('/login', Login)
routes.put('/profile', authMiddleware, EditMyProfile)
routes.get('/posts', GetPost)
routes.get('/profile', authMiddleware, GetMyProfile)
routes.get('/result', authMiddleware, GetMyApplicationResult)
routes.post("/apply/:postId", authMiddleware,
  upload.fields([
    {
      name: "resume",
      maxCount: 1,
    },
    {
      name: "transcript",
      maxCount: 1,
    },
  ]),
  ApplyResume
);

export default routes

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register
 *     description: Create a new user account.
 *     tags:
 *       - auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - lastname
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 description: User first name
 *                 example: "Naruechit"
 *               lastname:
 *                 type: string
 *                 description: User last name
 *                 example: "Chaimongkon"
 *               email:
 *                 type: string
 *                 description: User email used for login
 *                 example: "Naruechit@example.com"
 *               password:
 *                 type: string
 *                 description: User password
 *                 example: "password123"
 *               role:
 *                 type: string
 *                 description: User role
 *                 example: "hr"
 *     responses:
 *       201:
 *         description: Successful register
 *         content:
 *           application/json:
 *             example:
 *               status: 201
 *               message: "Register succeed"
 *
 *       400:
 *         description: Validation error. The message indicates the invalid field and expected type.
 *         content:
 *           application/json:
 *             example:
 *               status: 400
 *               message: "email must be a string"
 *
 *       409:
 *         description: Email already exists
 *         content:
 *           application/json:
 *             example:
 *               status: 409
 *               message: "This email is already in use."
 *
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               status: 500
 *               message: "Internal server error."
 */