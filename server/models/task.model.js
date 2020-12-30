const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    username: { type: String, required: true },
    description: { type: String, requried: true },
    date: { type: Date, required: true}
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;