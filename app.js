import express from "express";
import "dotenv/config";
import helmet from "helmet";
import cors from "cors";
import "./db/db.js";
import alertsRouter from "./routes/alerts.router.js";
import { errorHandler } from "./utils/errorHandler.js";

const PORT = process.env.PORT;
const app = express();
app.use(helmet());
app.use(express.json());
app.use(cors());
app.use("/api/alerts", alertsRouter)

app.use(errorHandler)

app.listen(PORT, ()=>{
    console.log(`server running on http://localhost:${PORT}`);
})