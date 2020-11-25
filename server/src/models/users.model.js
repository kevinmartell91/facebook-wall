const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({

    email: {
        type: String,
        unique: true
    },
    password: String,
    createdDate: {
        type: Date,
        default: Date.now()
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }]
});

module.exports =  mongoose.model('User', userSchema);


