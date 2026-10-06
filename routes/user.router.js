import express from "express"

const router = express.Router()

router.post("/register")
router.post("/login")
router.get("/me")
router.get("/")
router.delete("/:id")

export default router