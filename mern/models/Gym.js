import mongoose from "mongoose";

const gymSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    picture:{
        type: String,
        required: false
    },
}, {
    timestamps: true // created, updated
});

const Gym = mongoose.model('Gym', gymSchema);
export default Gym;