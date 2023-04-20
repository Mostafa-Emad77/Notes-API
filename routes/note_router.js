const { Router } = require('express');
const noteRouter = Router()

const notesController = require('../controllers/note.controller');

noteRouter.get('/', notesController.getALLNote);
noteRouter.get('/archive', notesController.getAllArchiveNotes);
noteRouter.post('/', notesController.addNote);
noteRouter.post('/import', notesController.importNote);
noteRouter.post('/template',notesController.addWithTemplate);
noteRouter.post('/search', notesController.searchNote);
noteRouter.put('/:id', notesController.editnotebyID);
noteRouter.put('/archive/:id', notesController.archiveNote);
noteRouter.get('/:id', notesController.getNotebyId);
noteRouter.get('/export/:id', notesController.exportNote);
noteRouter.delete('/:id', notesController.deletenote);
module.exports = {
    noteRouter
};

