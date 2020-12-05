const { Schema } = require('mongoose');
const mongoose = require('mongoose');
const serviceSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    staffId: {
        type: Schema.Types.ObjectId,
        ref: "Staff",
        required: true
    },
    shortDes: {
        type: String,
        required: true
    },
    longDes: {
        type: String,
        required: true
    },
    image: {
        type:String,
        required: true
    },
    path: {
        type: String,
        // required: true
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

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;