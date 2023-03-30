const { Router } = require('express');
const noteRouter = Router()

const notesController = require('../controllers/note.controller');

noteRouter.get('/', notesController.getALLNotes);
noteRouter.get('/:id', notesController.getNotebyId);
noteRouter.post('/', notesController.addNote);
noteRouter.put('/:id', notesController.editnotebyID);
noteRouter.delete('/:id', notesController.deletenote);
noteRouter.delete('/:id', notesController.searchNotes);


module.exports = {
    noteRouter
};
