const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, requried: true },
    date: { type: Date, required: true},
    user: {type: mongoose.Schema.Types.ObjectID, ref: 'User'}
},{
    timestamps: true
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;