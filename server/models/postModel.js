const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { type: String, required: true, trim: true},
    content: { type: String, required: true },
    type: { 
        type: String, 
        required: true,
        validate: {
            validator: (str) => {
                return (str == 'Entry' || str == 'Task' || str == 'Challenge')
            },
            message: 'Post type must be either Entry, Task or Challenge'
        }
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