import express from 'express';
import mongoose from 'mongoose';
import Gym from "../../models/Gym.js";
import {getGyms, createGym, updateGym, deleteGym, searchGyms} from '../controllers/gym.controller.js';

const router = express.Router();

router.get("/", getGyms);
router.post("/", createGym);
router.put("/:id", updateGym);
router.delete("/:id", deleteGym);
router.get("/search", searchGyms);

export default router;