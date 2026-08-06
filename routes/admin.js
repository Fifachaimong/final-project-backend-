import express from 'express'
import { CreateUserByAdmin, DeleteUser, EditUser } from '../controller/admin.js'
import { registerSchema } from '../schema/auth.js'
import { ValidateBody } from '../middleware/validate.js'

const routess = express.Router()

routess.post('/create', CreateUserByAdmin)
routess.delete('/delete/:id', DeleteUser)
routess.put('/edit/:id', EditUser)

export default routess