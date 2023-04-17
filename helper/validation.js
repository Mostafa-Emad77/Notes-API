const Joi = require('joi');
const express = require("express");
const app = express();
app.use(express.json());

function validateNote(note){
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        description: Joi.string().max(2000).required(),
        dueDate: Joi.string().regex(/^\d{4}-\d{2}-\d{2}$/).required(),
        pinned: Joi.boolean().required()
    });
    return schema.validate(note);
}

module.exports = {validateNote, };