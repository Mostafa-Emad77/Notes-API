const { Note } = require('../models/note');
const archiveNote = async (req, res) => {
    try {
      const note = await Note.findById(req.params.id);
      if (!note) {
        return res.status(404).send('Note not found');
      }
      note.archived = req.body.archived;
      await note.save();
      res.status(200).send(note);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  const getAllArchiveNotes = async (req, res) => {
    const archivedNotes = await Note.find({ archived: true }).sort({ pinned: -1 });
    res.send(archivedNotes);
};
  
module.exports={ 
    archiveNote,
    getAllArchiveNotes
}