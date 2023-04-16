const express = require("express");
const app = express();
app.use(express.json());
const { noteRouter } = require('./routes/note_router');
app.use('/api/notes/', noteRouter);
module.exports = { app };