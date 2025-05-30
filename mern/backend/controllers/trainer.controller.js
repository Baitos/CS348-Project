import Trainer from "../../models/Trainer.js";
import mongoose from "mongoose";

export const getTrainers = async (req,res) => {
    try {
        const trainers = await Trainer.find({});
        res.status(200).json({success: true, data: trainers});
    } catch (error) {
        console.log("Error in fetching trainers:", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
};

export const createTrainer = async (req,res) => {
    const trainer = req.body; // user will send a trainer
    if (!trainer.username || !trainer.password || !trainer.team || !["instinct", "valor", "mystic"].includes((trainer.team).toLowerCase())) {
        return res.status(400).json({ success:false, message: "Please provide all fields correctly"});
    }
    const trainerExists = await Trainer.findOne({ username: trainer.username });
    if (trainerExists) {
        return res.status(409).json({ success: false, message: "Username taken." });
    }
    const newTrainer = new Trainer(trainer);
    try {
        await newTrainer.save();
        res.status(201).json({success:true, data: newTrainer});
    } catch(error) {
        console.error("Error in creating trainer:", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
};

export const updateTrainer = async (req,res) => {
    const {id} = req.params;
    console.log("id:", id);
    const trainer = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Trainer ID Invalid"});
    }

    try {
        const updatedTrainer = await Trainer.findByIdAndUpdate(id, trainer,{new:true});
        res.status(200).json({ success: true, data: updatedTrainer }); 
    } catch (error) {
        console.error("Error in updating trainer:", error.message);
        res.status(500).json({success: false, message: "Server Error"});   
    }
};

export const deleteTrainer = async (req, res) => {
    const {id} = req.params;
    console.log("id:", id);
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Trainer ID Invalid"});
    }
    try {
        await Trainer.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Trainer Deleted" }); 
    } catch (error) {
        console.log("Error in deleting trainer:", error.message);
        res.status(500).json({success: false, message: "Server Error"}); 
    }
};

export const validateTrainer = async (req,res) => {
    const trainer = req.body; // user will send a trainer
    if (!trainer.username || !trainer.password) {
        return res.status(400).json({ success:false, message: "Please provide all fields correctly"});
    }
    const trainerExists = await Trainer.findOne({ username: trainer.username });
    if (!trainerExists) {
        return res.status(404).json({ success: false, message: "Trainer does not exist." });
    }
    if (trainerExists.password != trainer.password) {
        return res.status(401).json({ success: false, message: "Invalid password." });
    }
    try {
        res.status(200).json({success:true,
                              message: "Sign In Successful.",
                              trainer: {
                                username: trainerExists.username,
                                level: trainerExists.level,
                                team: trainerExists.team,
                                id: trainerExists.id,
                              } 
        });
    } catch(error) {
        console.error("Error in signing in:", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
};