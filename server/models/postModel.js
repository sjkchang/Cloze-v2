const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { type: String, required: true, trim: true},
    content: { type: String, required: true },
    type: { 
        type: String,
        enum: ['Task', 'Entry', 'Challenge',],
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectID, 
        ref: 'User',
    }
},{
    timestamps: true
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;