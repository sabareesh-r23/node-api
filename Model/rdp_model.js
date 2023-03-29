const mongoose = require("mongoose");

const JobListSchema = new mongoose.Schema({
    moduleslist: {
        type: String,
        required: true,
    },
    status: {
        type: String,
    },
    machine: {
        type: String,
    },
    userDetails: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Job", JobListSchema);
