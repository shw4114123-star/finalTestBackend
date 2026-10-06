import { createUserDAL, getUserByEmailDAL } from "../DAL/users.dal.js";
import { passwordHash } from "../utils/bcryptPassword.js";
import { createError } from "../utils/errorHandler.js"

export const createUser = async (req, res) => {
    const { userName, email, password, role, assignedArena } = req.body
    const existsUser = await getUserByEmailDAL(email)
    if (existsUser) throw new createError("user with this email alredy exists", 400);
    const passHash = await passwordHash(password)
    const user = await createUserDAL(userName, email, passHash, role, assignedArena);
    delete user.passHash
    res.status(201).json({ success: true, data: user })
}