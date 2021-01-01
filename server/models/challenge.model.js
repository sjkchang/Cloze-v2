const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const challengeSchema = new Schema({
    title: { type: String, required: true, trim: true},
    content: { type: String, required: true },
    user: {type: mongoose.Schema.Types.ObjectID, ref: 'User'}
},{
    timestamps: true
});

const Challenge = mongoose.model('Challenge', challengeSchema);

module.exports = Challenge;