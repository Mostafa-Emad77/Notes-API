const { Note } = require('../models/note');
const searchNote = async (req, res) => {
    const searchTerm = req.body.term;//the term to be search
    const searchProperty = req.body.prop || 'name';//after or they are the default values
    const sortProperty = req.body.sort || 'id';
    const sortOrder = req.body.order || 'asc';
    const pinned = req.body.pinned;
    const query = {};//the query is where the results will be 
  query[searchProperty] = { $regex: searchTerm, $options: 'i' };
    if (pinned !== undefined) {// see if the pinned is defined or not
        query['pinned'] = pinned;
      }     
      const notes = await Note.find(query).sort({ [sortProperty]: sortOrder });//notes take the results from the query 
      res.send(notes);
};
module.exports={ searchNote }