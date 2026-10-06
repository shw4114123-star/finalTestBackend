import express from "express"
import { validate } from "../validations/validate.js"
import { loginUserSchema, usersSchema } from "../validations/users.schema.js"
import { asyncWrapper } from "../utils/asyncWrapper.js"
import {
    createUser,
    daleteUser,
    getAllUsers,
    getUserById,
    loginUser 
} from "../controllers/users.ctrl.js"
import { authMidlleware } from "../utils/authMidlleware.js"

const router = express.Router()

router.post("/register", validate(usersSchema), asyncWrapper(createUser))
router.post("/login", validate(loginUserSchema), asyncWrapper(loginUser))
router.get("/me", authMidlleware, asyncWrapper(getUserById))
router.get("/", authMidlleware, asyncWrapper(getAllUsers))
router.delete("/users/:id", authMidlleware, asyncWrapper(daleteUser))

export default router