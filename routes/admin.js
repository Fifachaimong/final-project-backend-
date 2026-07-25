import express from 'express'
import { CreateUserByAdmin, DeleteUser, EditUser } from '../controller/admin.js'
import schema from '../schema/auth.js'
import { ValidateBody } from '../middleware/validate.js'

const routess = express.Router()

routess.post('/create', ValidateBody(schema), CreateUserByAdmin)
routess.delete('/delete', DeleteUser)
routess.put('/edit', EditUser)

export default routess