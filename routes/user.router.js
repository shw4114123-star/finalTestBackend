import express from "express"
import { validate } from "../validations/validate.js"
import { usersSchema } from "../validations/users.schema.js"
import { asyncWrapper } from "../utils/asyncWrapper.js"
import { createUser } from "../controllers/users.ctrl.js"

const router = express.Router()

router.post("/register", validate(usersSchema), asyncWrapper(createUser))
// router.post("/login")
// router.get("/me")
// router.get("/")
// router.delete("/:id")

export default router