import express from "express";
import { validate } from "../validations/validate";
import { alertsSchema } from "../validations/alerts.schema";

const router = express.Router();

router.get("/")
router.get("/:id")
router.post("/", validate(alertsSchema), )
router.put("/:id")
router.delete("/:id")

export default router
