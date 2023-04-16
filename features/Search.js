const { Note } = require('../models/note');
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
module.exports={ searchNote }