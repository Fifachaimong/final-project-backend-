import express from 'express'
import { CreateUserByAdmin, DeleteUser, EditUser } from '../controller/admin.js'
import { createUserSchema, editUserSchema }from '../schema/admin.js'
import { ValidateBody } from '../middleware/validate.js'

const routess = express.Router()

routess.post('/create', ValidateBody(createUserSchema), CreateUserByAdmin)
routess.delete('/delete/:id', DeleteUser)
routess.put('/edit/:id', ValidateBody(editUserSchema), EditUser)

export default routess

/**
 * @swagger
 * /admin/create:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user account and add the user to the system.
 *     tags:
 *       - auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstname
 *               - lastname
 *               - email
 *               - password
 *             properties:
 *               firstname:
 *                 type: string
 *                 description: User first name
 *                 example: "Naruechit"
 *               lastname:
 *                 type: string
 *                 description: User last name
 *                 example: "Chaimongkon"
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User email used for login
 *                 example: "Naruechit@example.com"
 *               password:
 *                 type: string
 *                 description: User password
 *                 example: "password123"
 *               role:
 *                 type: string
 *                 enum:
 *                   - applicant
 *                   - hr
 *                   - admin
 *                 default: applicant
 *                 description: User role. Defaults to applicant if not provided.
 *                 example: "applicant"
 *
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             example:
 *               message: "Create user succeed"
 *
 *       400:
 *         description: Validation error. The message indicates the invalid field and expected type.
 *         content:
 *           application/json:
 *             example:
 *               message: "email must be a string"
 *
 *       409:
 *         description: Email already exists
 *         content:
 *           application/json:
 *             example:
 *               message: "This email is already in use."
 *
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               message: "Internal server error."
 */