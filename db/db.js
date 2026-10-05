import { MongoClient } from "mongodb";
import "dotenv/config";

const client = new MongoClient(process.env.MONGO_URL)
export const db = client.db("tzofia-eye")

try {
    await client.connect()
    console.log("DB connect");
} catch (error) {
    console.error(error);
    process.exit(1)
}