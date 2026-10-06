import { createError } from "./errorHandler.js"
import { verifyToken } from "./generateToken.js";


export const authMidlleware = (async (req, _res, next) => {
    const { authorization } = req.headers
    if (!authorization) throw new createError("mising requair", 401)
    const token = authorization;
    if (!token) throw new createError("mising requair", 401);
    const user = await verifyToken(token)
    req.userId = user;
    next()
})