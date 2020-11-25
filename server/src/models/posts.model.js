const mongoose = require('mongoose');
const Schema = mongoose.Schema

const postSchema = new Schema({

    content: String,
    type: {
        type: String,
        enum: ["public", "friends"]
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updateDate: {
        type: Date,
    },
    deleted: Boolean
    
});

module.exports =  mongoose.model('Post', postSchema);


