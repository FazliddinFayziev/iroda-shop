const mongoose = require('mongoose');
const { Schema } = mongoose;

// ALL IMAGES SCHEMA

const bannerSchema = new Schema({

    // images
    images: {
        type: [String],
        required: true,
    },

    // text
    text_one: {
        type: String,
        required: true
    },

    // Link
    text_two: {
        type: String,
        required: true
    },

    // number
    text_three: {
        type: String,
        required: true
    },

})

// Models
const Banner = mongoose.model("banner", bannerSchema);

// Exporting All
exports.Banner = Banner;
