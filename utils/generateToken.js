import jwt from "jsonwebtoken"
import "dotenv/config"

export const genToken = async (userId) => {
    return jwt.sign(userId, process.env.JWT_SECRET, {expiresIn: process.env.JWT_TIME})
}

export const verifyToken = async (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}