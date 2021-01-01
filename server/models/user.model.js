const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true, trim: true },
    password_hash: { type: String, required: true },
    tasks : [{type: mongoose.Schema.Types.ObjectID, ref: 'Task'}],
    entries: [{type: mongoose.Schema.Types.ObjectID, ref: 'Entry'}],
    challenges: [{type: mongoose.Schema.Types.ObjectID, ref: 'Challenge'}]
},{
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;