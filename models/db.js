import mongoose from "mongoose";

const SubmitEntity = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    mimetype: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    }
})

export default mongoose.model('Submit', SubmitEntity)