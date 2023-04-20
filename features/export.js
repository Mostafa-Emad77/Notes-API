const { Note } = require('../models/note');
const fs = require('fs');
const path = require('path');

const exportNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send('Note not found');
    }   
    const filename = `note_${note.name}.txt`; 
    const filepath = path.join(__dirname, '..', filename); //Sets path for the txt file
    const data = `Name: ${note.name}\nDescription: ${note.description}\nDue Date: ${note.dueDate}\n`; 
    fs.writeFileSync(filepath, data, { encoding: 'utf-8' }); //write data in our txt file, with utf-8 character encoding for the text
    res.download(filepath, filename); //downloads the file in the given path
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports={
    exportNote
};
