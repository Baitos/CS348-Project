import mongoose from "mongoose";

const trainerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: false
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    team:{
        type: String,
        required: true
    },
    level:{
        type: String,
        required: true
    },
}, {
    timestamps: true // created, updated
});

const Trainer = mongoose.model('Trainer', trainerSchema);
export default Trainer;