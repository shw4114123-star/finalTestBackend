import express from "express";
import { validate } from "../validations/validate.js";
import { alertsSchema, updateAlertsSchema } from "../validations/alerts.schema.js";
import { asyncWrapper } from "../utils/asyncWrapper.js";
import { createAlerts, deleteAlertsById, getAlertsById, getAllAlerts, updateAlerts } from "../controllers/alerts.ctrl.js";

const router = express.Router();

router.get("/", asyncWrapper(getAllAlerts))
router.get("/:id", asyncWrapper(getAlertsById))
router.post("/", validate(alertsSchema), asyncWrapper(createAlerts))
router.put("/:id", validate(updateAlertsSchema), asyncWrapper(updateAlerts))
router.delete("/:id", asyncWrapper(deleteAlertsById))

export default router
