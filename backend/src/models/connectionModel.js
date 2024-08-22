const mongoose = require("mongoose");

const connectionSchema = new mongoose.Schema({
    user1: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    user2: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    
    status: {
        type: String,
        enum: ["pending", "accepted"],
        default: "pending",
    },

})


const Connection = new mongoose.model("Connection", connectionSchema);

module.exports = Connection;