const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true, trim: true },
    password_hash: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;