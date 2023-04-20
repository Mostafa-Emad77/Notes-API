const { Router } = require('express');
const noteRouter = Router()

const notesController = require('../controllers/note.controller');

noteRouter.get('/', notesController.getALLNote);
noteRouter.get('/archive', notesController.getAllArchiveNotes);
noteRouter.get('/:id', notesController.getNotebyId);
noteRouter.post('/', notesController.addNote);
noteRouter.put('/:id', notesController.editnotebyID);
noteRouter.delete('/:id', notesController.deletenote);
noteRouter.post('/search', notesController.searchNote);
noteRouter.post('/template',notesController.addWithTemplate);
noteRouter.put('/archive/:id', notesController.archiveNote);
noteRouter.get('/export/:id', notesController.exportNote);
noteRouter.post('/import', notesController.importNote);

module.exports = {
    noteRouter
};

