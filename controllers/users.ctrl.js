import { createUserDAL, deleteUserByIdDAL, getUserByEmailDAL, getUserByIdDAL } from "../DAL/users.dal.js";
import { comparePassword, passwordHash } from "../utils/bcryptPassword.js";
import { createError } from "../utils/errorHandler.js"
import { genToken } from "../utils/generateToken.js";

export const createUser = async (req, res) => {
    const { userName, email, password, role, assignedArena } = req.body
    const existsUser = await getUserByEmailDAL(email)
    if (existsUser) throw new createError("user with this email alredy exists", 400);
    const passHash = await passwordHash(password)
    const user = await createUserDAL(userName, email, passHash, role, assignedArena);
    delete user.passHash
    res.status(201).json({ success: true, data: user })
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const existsUser = await getUserByEmailDAL(email);
    if (!existsUser) throw new createError("user not found", 404);
    const pass = await comparePassword(password, existsUser.passHash);
    if (!pass) throw new createError("email / password not correct", 409)
    const token = await genToken(existsUser._id)
    res.json({ success: true, data: { ...existsUser, token } })
}

export const daleteUser = async (req, res) => {
    const { userId } = req.userId
    const { id } = req.params
    const user = await getUserByIdDAL(userId)
    if (user.role !== "admin") throw new createError("You do not have sufficient permissions",400);
    const userDelete = await deleteUserByIdDAL(id)
    if (userDelete.deleteCount === 0) throw new createError("user not found", 404)
    res.json({success: true, dataDelete: userDelete})
}