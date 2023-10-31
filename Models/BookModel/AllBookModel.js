const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema(
    {
        user_id: {
            type: String,
            required: true,
            ref: "User",
        },
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },       
        summary: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Book", bookSchema);