const { Note } = require('../models/note');

const addWithTemplate = async (req, res) => {
    try{
        const note = new Note;
        const temp = req.body.template; //User inputs the number of the template he wants
        let occasion = "";      //Will contain the string we will use in the template
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
        note.name=firstChar.toUpperCase() + occasion.slice(1);      //Ex: at temp=1, occasion = meeting, name = Meeting
        note.description = `I have ${aOrAn(firstChar)} ${occasion} on the given date`;
        note.dueDate = req.body.dueDate;    //User input date as well
        note.pinned = true;
        await Note.create(note);
        res.status(200).send(note);
    }
    catch(error){
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

