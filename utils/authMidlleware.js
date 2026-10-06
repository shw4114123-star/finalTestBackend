import { createError } from "./errorHandler"
import { verifyToken } from "./generateToken";


export const authMidlleware = (async (req, _res, next) => {
    const { authorization } = req.haeder
    if (!authorization) throw new createError("mising requair", 401)
    const token = authorization.split("Bearer ")[1];
    if (!token) throw new createError("mising requair", 401);
    const user = await verifyToken(token)
    req.userId = user;
    next()
})