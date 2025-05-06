import express from 'express';
import mongoose from 'mongoose';
import Trainer from "../../models/Trainer.js";
import {getTrainers, createTrainer, updateTrainer, deleteTrainer, validateTrainer} from '../controllers/trainer.controller.js';

const router = express.Router();

router.get("/", getTrainers);
router.post("/", createTrainer);
router.put("/:id", updateTrainer);
router.delete("/:id", deleteTrainer);
router.post("/login", validateTrainer);

export default router;