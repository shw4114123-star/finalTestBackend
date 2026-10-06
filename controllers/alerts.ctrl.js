import { createAlertsDAL, deleteAlertsByIdDAL, getAlertsByIdDAL, getAllAlertsDAL, updateAlertsDAL } from "../DAL/alerts.dal.js";
import { createError } from "../utils/errorHandler.js";

export const createAlerts = async (req, res) => {
    const { displayName, description, priority, arena, status, lon, lat } = req.body;
    const alerts = await createAlertsDAL(displayName, description, priority, arena, status, lon, lat);
    res.status(201).json({ success: true, data: alerts })
}

export const getAllAlerts = async (_req, res) => {
    const allAlerts = await getAllAlertsDAL();
    res.json({ success: true, data: allAlerts })
}

export const getAlertsById = async (req, res) => {
    const { id } = req.params;
    const alerts = await getAlertsByIdDAL(id);
    if (!alerts) throw new createError("alerts not found", 404)
    res.json({ success: true, data: alerts })
}

export const updateAlerts = async (req, res) => {
    const body = req.body;
    const { id } = req.params;
    const alerts = await updateAlertsDAL(id, body)
    if (!alerts) throw new createError("alerts not found", 404);
    res.json({ success: true, data: alerts })
}

export const deleteAlertsById = async (req, res) => {
    const { id } = req.params;
    const alerts = await deleteAlertsByIdDAL(id);
    if (alerts.deletedCount === 0) throw new createError("alerts not found", 404)
    res.json({ success: true, data: alerts })
}