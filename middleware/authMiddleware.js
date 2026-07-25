import AppError from "../utils/AppError.js"
import jwt from "jsonwebtoken"

const authMiddleware = (req, res, next) => {
    const authHead = req.headers.authorization
    if (!authHead || !authHead.startsWith('Bearer ')) {
        return next(new AppError('Unauthorization', 401))
    }

    const token = authHead.split(' ')[1]
    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN)
        
        req.user = decoded
        
        next()

    } catch (error) {
        console.error(error)
        next(new AppError('Invalid token', 401))
    }
}

export default authMiddleware