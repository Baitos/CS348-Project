import express from 'express';
import mongoose from 'mongoose';
import Trainer from "../../models/Trainer.js";
import {getTrainers, createTrainer, updateTrainer, deleteTrainer} from '../controllers/trainer.controller.js';

const router = express.Router();

router.get("/", getTrainers);
router.post("/", createTrainer);
router.put("/:id", updateTrainer);
router.delete("/:id", deleteTrainer);

export default router;