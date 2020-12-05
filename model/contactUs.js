const { Schema } = require('mongoose');
const mongoose = require('mongoose');
const contactUsSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    subject: {
        type:String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type:String,
        required: true
    },
    deleted: {
        type: Number,
        enum: [0, 1],
        required: true
    }
});

const ContactUS = mongoose.model("contactUS", contactUsSchema);

module.exports = ContactUS;