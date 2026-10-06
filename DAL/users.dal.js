import {db} from "../db/db.js"

const users = db.collection("users")

export async function createUserDAL(userName, email, passHash, role, assignedArena) {
    const user = {userName, email, passHash, role, assignedArena};
    const res = await users.insertOne(user)
    user._id = res.insertedId
    return user
}

export async function getUserByEmailDAL(email) {
    const res  = await users.findOne({email})
    return res
}