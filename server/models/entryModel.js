const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema({
    title: { type: String, required: true, trim: true},
    content: { type: String, required: true },
    user: {type: mongoose.Schema.Types.ObjectID, ref: 'User'}
},{
    timestamps: true
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;