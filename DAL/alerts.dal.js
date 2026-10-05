import { ObjectId } from "bson";
import { db } from "../db/db.js"

const alerts = db.collection("alerts")

export async function createAlertsDAL(displayName, description, priority, arena, status, lon, lat) {
    const warning = { displayName, description, priority, arena, status, lon, lat };
    const result = await alerts.insertOne(warning);
    warning._id = result.insertedId;
    return warning;
}

export async function getAllAlertsDAL() {
    const result = await alerts.find().toArray();
    return result
}

export async function getAlertsByIdDAL(id) {
    const result = await alerts.findOne({ _id: new ObjectId(id) });
    return result
}

export async function updateAlertsDAL(id, body) {
    const result = await alerts.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: body },
        { returnDocument : "after" }
    )
    return result
}

export async function deleteAlertsByIdDAL(id) {
    const result = await alerts.deleteOne({ _id: new ObjectId(id) })
    return result
}