const { Schema } = require('mongoose');
const mongoose = require('mongoose');
const contactSchema = new Schema({
    staff_id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    title_value: {
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

const Contact = mongoose.model("contact", contactUsSchema);

module.exports = Contact;