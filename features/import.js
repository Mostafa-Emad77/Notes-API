const { Note } = require('../models/note');
const fs = require('fs');
const path = require('path');

const importNote = async (req, res) => {
    try {
      const filename = req.body.file;       //Input: Text file name (ex: note.txt)
      const filepath = path.join(__dirname, '..', filename);    //Makes path of the text file
      const data = fs.readFileSync(filepath, 'utf8');       //Reads the text inside the text file
      const lines = data.trim().split('\n');        //Splits the lines and each of them as an element in the array
  
    const name = lines[0].substring(lines[0].indexOf(':') + 1).trim();
    const description = lines[1].substring(lines[1].indexOf(':') + 1).trim();       //Takes the needed data from each line and maps it to its own property 
    const dueDate = lines[2].substring(lines[2].indexOf(':') + 1).trim();           //(name in line 0, and so on)
  
      const note = new Note({
        name,
        description,
        dueDate,
        pinned: false, // default value
      });
      
      await note.save(); //adds the created note to the database
  
      console.log(`Imported 1 note from ${path.basename(filepath)}.`);
      res.status(200).send(`Imported 1 note from ${path.basename(filepath)}.`);
    } catch (err) {
      console.error(`Error importing note`);
    }
  };

  module.exports={
    importNote
};
