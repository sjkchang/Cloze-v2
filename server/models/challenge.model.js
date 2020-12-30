const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const challengeSchema = new Schema({
    title: { type: String, required: true, trim: true},
    content: { type: String, required: true },
    username: { type: String, required: true }
});

const Challenge = mongoose.model('Challenge', challengeSchema);

module.exports = Challenge;