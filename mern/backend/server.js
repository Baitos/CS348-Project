import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from "../config/db.js";
//import cors from "cors";
//import Gym from "../models/Gym.js";
//import mongoose from 'mongoose';

import gymRoutes from "./routes/gym.route.js";
import trainerRoutes from "./routes/trainer.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 2000;

//app.use(cors());
app.use(express.json()); // allows request to be JSON data in the body

app.use("/api/gym", gymRoutes);
app.use("/api/trainer", trainerRoutes);

console.log(process.env.MONGO_URI);

app.listen(PORT, () => { // port, callback fn
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});

// ZAwu6veVZ1Ce8onm