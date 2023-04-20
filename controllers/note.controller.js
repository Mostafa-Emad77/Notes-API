const { validateNote} = require('../helper/validation');
const {addWithTemplate} = require('../features/template');
const {searchNote} = require('../features/Search');
const {archiveNote} = require('../features/Archive');
const {getAllArchiveNotes} = require('../features/Archive');
const {exportNote} = require('../features/export');
const {importNote} = require('../features/import');
const { Note } = require('../models/note');
const getALLNote = async (req, res) => {
  const notes = await Note.find({ $or: [{ archived: false }, { archived: { $exists: false } }] }).sort({ pinned: -1 });
  res.send(notes);
};

  const getNotebyId = async (req, res) => {
    try {
      const note = await Note.findById(req.params.id);
      res.status(200).send(note);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  
const addNote = async (req, res) => {
    try {
      const result = validateNote(req.body);
      if (result) {
        const note = await Note.create(req.body);
        res.status(200).send(note);
      }
    } catch (error) {
      res.status(400).send(error);
    }
  };

const editnotebyID = async (req,res) => {
    try{
        const note = await Note.findOne({_id: req.params.id});
        if(!note){
            return res.status(404).send('Note not found');
        }
        const result = validateNote(req.body);
        if(result){
            if(req.body.name){
                    note.name = req.body.name;
           }
            if(req.body.description){
                note.description = req.body.description;
            }
            if(req.body.dueDate){
              note.dueDate = req.body.dueDate;
            }
            await note.save();
            res.status(200).send(note);
        }
    }
    catch(error){
        res.status(400).send(error);
    }
};

const deletenote = async (req,res) => {
    try{
        const note = await Note.deleteOne({_id: req.params.id});
        res.status(200).send();
    }
    catch(error){
        res.status(400).send(error);
    }
};  

module.exports={
    getALLNote,
    getNotebyId,
    editnotebyID,
    searchNote,
    addNote,
    deletenote,
    addWithTemplate,
    archiveNote,
    getAllArchiveNotes,
    exportNote,
    importNote
}

