const { Note } = require('../models/note');
const fs = require('fs');
const path = require('path');

const importNote = async (req, res) => {
    try {
      const filename = req.body.file; 
      const filepath = path.join(__dirname, '..', filename); 
      const data = fs.readFileSync(filepath, 'utf8');
      const lines = data.trim().split('\n');
  
    const name = lines[0].substring(lines[0].indexOf(':') + 1).trim();
    const description = lines[1].substring(lines[1].indexOf(':') + 1).trim();
    const dueDate = lines[2].substring(lines[2].indexOf(':') + 1).trim();
  
      const note = new Note({
        name,
        description,
        dueDate,
        pinned: false, // default value
      });
      
      await note.save();
  
      console.log(`Imported 1 note from ${path.basename(filepath)}.`);
      res.status(200).send(`Imported 1 note from ${path.basename(filepath)}.`);
    } catch (err) {
      console.error(`Error importing note`);
    }
  };

  module.exports={
    importNote
};