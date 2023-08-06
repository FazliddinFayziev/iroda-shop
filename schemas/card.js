const mongoose = require('mongoose');
const { Schema } = mongoose

const CardSchema = Schema({

    // Card Items
    cardItems: {
        type: Array,
        required: true,
    },

    // Total Price
    totalPrice: {
        type: String,
        required: true
    },

    // User Information
    userInfo: [
        {
            // User Name
            userName: {
                type: String,
                required: true
            },

            // SureName
            sureName: {
                type: String,
                required: true
            },

            // Phone Number
            phoneNumber: {
                type: String,
                required: true
            },

            // Address
            message: {
                type: String,
                required: true
            }
        }
    ]

})

// Models
const Card = mongoose.model("card", CardSchema);

// Exporting All
exports.Card = Card;