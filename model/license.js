const { Schema } = require('mongoose');
const mongoose = require('mongoose');
const licenseSchema = new mongoose.Schema({
    staffId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staff',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
  
    status: {
        type:String,
        default: 'success'
    },
    deleted: {
        type: Number,
        enum: [0, 1],
        default: 1
    }
}, {
    timestamps: true
});

const License = mongoose.model("license", licenseSchema);

module.exports = License;