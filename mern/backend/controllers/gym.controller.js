import Gym from "../../models/Gym.js";
import mongoose from "mongoose";

export const getGyms = async (req,res) => {
    try {
        const gyms = await Gym.find({});
        res.status(200).json({success: true, data: gyms});
    } catch (error) {
        console.log("Error in fetching gyms:", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
};

export const createGym = async (req,res) => {
    console.log("Received data:", req.body); // Debugging log

    const gym = req.body; // user will send a gym
    if (!gym.name || !gym.location || !gym.username) {
        return res.status(400).json({ success:false, message: "Please provide all fields"});
    }
    const newGym = new Gym(gym);
    try {
        await newGym.save();
        res.status(201).json({success:true, data: newGym});
    } catch(error) {
        console.error("Error in creating gym:", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
};

export const updateGym = async (req,res) => {
    const {id} = req.params;
    console.log("id:", id);
    const gym = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Gym ID Invalid"});
    }

    try {
        const updatedGym = await Gym.findByIdAndUpdate(id, gym,{new:true});
        res.status(200).json({ success: true, data: updatedGym }); 
    } catch (error) {
        console.error("Error in updating gym:", error.message);
        res.status(500).json({success: false, message: "Server Error"});   
    }
};

export const deleteGym = async (req, res) => {
    const {id} = req.params;
    console.log("id:", id);
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Gym ID Invalid"});
    }
    try {
        await Gym.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Gym Deleted" }); 
    } catch (error) {
        console.log("Error in deleting gym:", error.message);
        res.status(500).json({success: false, message: "Server Error"}); 
    }
};

export const searchGyms = async (req, res) => {
    const { username, location, team, name } = req.query;
    const query = {};
    if (username) query.username = { $regex: username, $options: 'i' };
    if (location) query.location = { $regex: location, $options: 'i' };
    if (name) query.name = { $regex: name, $options: 'i' }; 

    try {
        const gyms = await Gym.find(query);
        res.status(200).json({ success: true, data: gyms });
    } catch (error) {
        console.error("Error in searching gyms:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}