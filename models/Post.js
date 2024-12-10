const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title : {
        type: String,
        required: true
    },

    media : {
        type: Array,
        
    },

    description : {
        type: String,
        required: true
    },

    category : {
        type: String,
        required: true
    },

    tags : {
        type: Array,
    },

    author : {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    date : {
        type: Date,
        default: Date.now
    }
}, {timestamps: true});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;