import "./config/env.js"
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import routes from './routes/auth.js'
import route from "./routes/hr.js"
import ErrorMiddleware from './middleware/ErrorMiddleware.js'
import routess from "./routes/admin.js"
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from "./docs/swaggerConfig.js"

const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use('/auth', routes)
app.use('/hr', route)
app.use('/admin', routess)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use(ErrorMiddleware)

app.listen(3000, () => {
    console.log('Server running')
})