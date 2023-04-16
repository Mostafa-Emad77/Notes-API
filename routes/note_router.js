const { Router } = require('express');
const noteRouter = Router()

const notesController = require('../controllers/note.controller');

noteRouter.get('/', notesController.getALLNote);
noteRouter.get('/:id', notesController.getNotebyId);
noteRouter.post('/', notesController.addNote);
noteRouter.put('/:id', notesController.editnotebyID);
noteRouter.delete('/:id', notesController.deletenote);
noteRouter.post('/search', notesController.searchNote);
noteRouter.post('/template',notesController.addWithTemplate);

module.exports = {
    noteRouter
};
