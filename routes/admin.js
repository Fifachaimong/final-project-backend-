import express from 'express'
import { CreateUserByAdmin, DeleteUser, EditUser } from '../controller/admin.js'
import { createUserSchema, editUserSchema }from '../schema/admin.js'
import { ValidateBody } from '../middleware/validate.js'

const routess = express.Router()

routess.post('/create', ValidateBody(createUserSchema), CreateUserByAdmin)
routess.delete('/delete/:id', DeleteUser)
routess.put('/edit/:id', ValidateBody(editUserSchema), EditUser)

export default routess