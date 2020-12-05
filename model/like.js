const { Schema } = require('mongoose');
const mongoose = require('mongoose');
const likeSchema = new Schema({
    user_id: {
        type: Number,
        required: true
    },
    blog_id: {
        type: Number,
        required: true
    },
    counter: {
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

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;