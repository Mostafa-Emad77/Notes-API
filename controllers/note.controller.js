const { validateNote} = require('../helper/validation')
const { Note } = require('../models/note');
const getALLNote = async (req, res) => {
    const notes = await Note.find().sort({ pinned: -1 });
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
  

const searchNote = async (req, res) => {
    const searchTerm = req.body.term;
    const searchProperty = req.body.prop || 'name';
    const sortProperty = req.body.sort || 'id';
    const sortOrder = req.body.order || 'asc';
    const pinned = req.body.pinned;
    const query = {};
  query[searchProperty] = { $regex: searchTerm, $options: 'i' };
    if (pinned !== undefined) {
        query['pinned'] = pinned;
      }     
      const notes = await Note.find(query).sort({ [sortProperty]: sortOrder });
      res.send(notes);
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
    addNote,
    deletenote
}
