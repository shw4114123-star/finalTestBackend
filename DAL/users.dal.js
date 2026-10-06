import { ObjectId } from "bson";
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

export async function getUserByIdDAL(id) {
    const res = await users.findOne({_id: new ObjectId(id)})
    return res
}

export async function deleteUserByIdDAL(id) {
    const res = await users.findOneAndDelete({_id: new ObjectId(id)})
    return res
}