import express from "express";
import "dotenv/config";
import helmet from "helmet";
import cors from "cors";


const PORT = process.env.PORT;
const app = express();
app.use(helmet());
app.use(express.json());
app.use(cors());



app.listen(PORT, ()=>{
    console.log(`server running on http://localhost:${PORT}`);
})