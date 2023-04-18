<<<<<<< Updated upstream
const { Router } = require('express');
const noteRouter = Router()

const notesController = require('../controllers/note.controller');
const Search = require('../features/Search');

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
=======
const { Router } = require('express');
const noteRouter = Router()

const notesController = require('../controllers/note.controller');
const Search = require('../features/Search');
const Archive = require('../features/Archive');

noteRouter.get('/', notesController.getALLNote);
noteRouter.get('/archive', notesController.getAllArchiveNotes);
noteRouter.get('/:id', notesController.getNotebyId);
noteRouter.post('/', notesController.addNote);
noteRouter.put('/:id', notesController.editnotebyID);
noteRouter.delete('/:id', notesController.deletenote);
noteRouter.post('/search', notesController.searchNote);
noteRouter.post('/template',notesController.addWithTemplate);
noteRouter.put('/archive/:id', notesController.archiveNote);



module.exports = {
    noteRouter
};
>>>>>>> Stashed changes
