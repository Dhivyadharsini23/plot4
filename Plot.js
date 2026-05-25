const mongoose = require("mongoose");

const plotSchema = new mongoose.Schema({

    location: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    },

    growth: {
        type: String,
        required: true
    },

    water: {
        type: String,
        required: true
    },

    drainage: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Plot", plotSchema);
