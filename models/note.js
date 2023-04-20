const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    dueDate: {
        type: String,
        required: true,
    },
    pinned: {
        type: Boolean,
        required: true,
    },
    archived: {
        type: Boolean,
        default: false
      }


});

const Note = mongoose.model('Note', noteSchema);

module.exports = {
    Note,
};
