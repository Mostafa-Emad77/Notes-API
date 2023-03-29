const { validateNote} = require('../helper/validation')
const { notes } = require('../models/note');
const getALLNotes = (req, res) => {
    const sortedNotes = [...notes].sort((a, b) => b.pinned - a.pinned);
    res.send(sortedNotes);
};

const getNotebyId = (req,res) => {
    const note = notes.find(c => c.id === parseInt(req.params.id));
    if(!note){
        res.status(404).send('The Note with the given ID not found !');
    }else{
        res.send(note);
    }
};

const searchNotes = (req, res) => {
    const searchTerm = req.body.term;
    const searchProperty = req.body.prop || 'name';
    const sortProperty = req.body.sort || 'id';
    const sortOrder = req.body.order || 'asc';
    const pinned = req.body.pinned;

    let filteredNotes = notes.filter(note => {
        const matchesSearchTerm = note[searchProperty]
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const matchesPinnedStatus =
            pinned === undefined || note.pinned === pinned;
        return matchesSearchTerm && matchesPinnedStatus;
    });
    filteredNotes.sort((a, b) => {
        if (sortOrder === 'asc') {
            return a[sortProperty] > b[sortProperty] ? 1 : -1;
        } else {
            return a[sortProperty] < b[sortProperty] ? 1 : -1;
        }
    });

    res.send(filteredNotes);
};

const addNote = (req,res)=> {

    const result = validateNote(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        console.log(result);
        return;
    }

    const note = {
        id: notes.length + 1,
        name: req.body.name,
        description: req.body.description,
        dueDate: req.body.dueDate,
        pinned: req.body.pinned || false
    };
    notes.push(note);
    res.send(note);
};

const editnotebyID =  (req,res) => {
    const note = notes.find(c => c.id === parseInt(req.params.id));
    if(!note)
        res.status(404).send('The Note with the given ID not found !');
    
    const result = validateNote(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        console.log(result);
        return;
    }

    note.name = req.body.name;
    note.description = req.body.description;
    note.dueDate = req.body.dueDate;
    note.pinned = req.body.pinned;
    res.send(note);

};

const deletenote = (req,res) => {
    const note = notes.find(c => c.id === parseInt(req.params.id));
    if(!note)
        res.status(404).send('The Note with the given ID not found !');
    
    const index = notes.indexOf(note);
    notes.splice(index , 1);

    res.send(note);
};

module.exports={
    getALLNotes,
    getNotebyId,
    searchNotes,
    editnotebyID,
    addNote,
    deletenote
}
