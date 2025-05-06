import mongoose from "mongoose";

const gymSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    username:{ 
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    victories:{
        type: String,
        required: false
    },
    time:{
        type: String,
        required: false
    },
    berries:{
        type: String,
        required: false
    },
    
}, {
    timestamps: true // created, updated
});

gymSchema.index({ username: 1});

const Gym = mongoose.model('Gym', gymSchema);
export default Gym;