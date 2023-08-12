const mongoose = require("mongoose");

const { Schema } = mongoose;

// SCHEMA PRODUCT

const productSchema = new Schema({
    // Name
    name: {
        type: String,
        required: true,
    },

    // Category
    category: {
        type: String,
        required: true,
    },

    // Company
    company: {
        type: String,
        required: true,
    },

    // Price
    price: {
        type: Number,
        required: true,
    },

    // desc ru
    desc: {
        type: String,
        required: true,
    },

    // size
    size: {
        type: Array,
        required: true,
    },

    // image
    images: {
        type: [String],
        required: false,
    },

    // Image URLS
    imageUrls: {
        type: [String],
        required: false,
    }
});

// Models

const Product = mongoose.model('Shirts', productSchema);


// Exporting All
exports.Product = Product;

