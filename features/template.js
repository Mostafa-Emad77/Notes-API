const { Note } = require('../models/note');

const addWithTemplate = async (req, res) => {
    try{
        const note = new Note;
        const temp = req.body.template;
        let occasion = "";
        if(temp==1){
            occasion="meeting";
        }
        else if(temp==2){
            occasion="exam";
        }
        else if(temp==3){
            occasion="interview";
        }
        else{
            return res.status(404).send('No such template exists');
        }
        const firstChar = occasion.charAt(0);
        note.name=firstChar.toUpperCase() + occasion.slice(1);
        note.description = `I have ${aOrAn(firstChar)} ${occasion} on the given date`;
        note.dueDate = req.body.dueDate;
        note.pinned = true;
        await Note.create(note);
        res.status(200).send(note);
    }
    catch{
        res.status(400).send(error);
    }

  };

  module.exports={addWithTemplate}

  function aOrAn(firstChar){
    let article = '';
    if(firstChar=='a' || firstChar=='o' || firstChar=='e' || firstChar=='u' || firstChar=='i'){
        article = "an";
    }
    else{
        article="a";
    }
    return article;
  }