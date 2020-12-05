const { Schema } = require('mongoose');
const mongoose = require('mongoose');
const aboutUsSchema = new Schema({
    staffId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Staff",
        required: true
    },
    shortText: {
        type: String,
        required: true,
    },
    longText: {
        type: String,
        required: true
    },
    status: {
        type:String,
        default: "success"
    },
    deleted: {
        type: Number,
        enum: [0, 1],
        default: 1
    }
}, {
    timestamps: true
});

const AboutUS = mongoose.model("AboutUS", aboutUsSchema);

module.exports = AboutUS;