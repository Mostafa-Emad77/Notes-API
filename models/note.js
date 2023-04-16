const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    dueDate: {
        type: String,
        required: true,
    },
    pinned: {
        type: Boolean,
        required: true,
    },


});

const Note = mongoose.model('Note', noteSchema);

module.exports = {
    Note,
};


/*const notes = [

    { id: 1,  name: "JAVA",              description: "i need to know basics",                         dueDate: "2023-01-05",      pinned: true  },
    { id: 2,  name: "C++",               description: "i need to do more practice",                    dueDate: "2023-01-08",      pinned: false },
    { id: 3,  name: "Python",            description: "it's so easy language",                         dueDate: "2023-01-07",      pinned: false },
    { id: 4,  name: "HTML",              description: "i will take it 2 hours",                        dueDate: "2023-01-09",      pinned: false },
    { id: 5,  name: "CSS",               description: "have assignment due to 15-01-2023",             dueDate: "2023-01-10",      pinned: false },
    { id: 6,  name: "JAVASCRIPT",        description: "i will take 2 hours daily",                     dueDate: "2023-01-13",      pinned: true  },
    { id: 7,  name: "Angular",           description: "i need to know front-end",                      dueDate: "2023-01-16",      pinned: false },
    { id: 8,  name: "Node JS",           description: "have quize in 20-01-2023",                      dueDate: "2023-01-16",      pinned: true  },
    { id: 9,  name: "#C",                description: "",                                              dueDate: "2023-01-19",      pinned: false },
    { id: 10, name: "c",                 description: "",                                              dueDate: "2023-01-20",      pinned: false },
    { id: 11, name: "React",             description: "i need to know front-end",                      dueDate: "2023-01-24",      pinned: false },
    { id: 12, name: "PHP",               description: "i need to know back-end",                       dueDate: "2023-01-25",      pinned: true  },
    { id: 13, name: "MongoDB",           description: "it's important to save data",                   dueDate: "2023-01-25",      pinned: false },
    { id: 14, name: "MYSQL",             description: "it's better choise if i have many relations",   dueDate: "2023-01-29",      pinned: false },
    { id: 15, name: "OracleDB",          description: "",                                              dueDate: "2023-02-02",      pinned: false },
    { id: 16, name: "Problem solving",   description: "i need to do more practice",                    dueDate: "2023-02-05",      pinned: false },
    { id: 17, name: "Maths",             description: "have exam in 20-02-2023",                       dueDate: "2023-02-08",      pinned: false },
    { id: 18, name: "Arabic",            description: "revision on grammer and do HW",                 dueDate: "2023-02-08",      pinned: false },
    { id: 19, name: "History",           description: "i need to read some stories",                   dueDate: "2023-02-10",      pinned: false },
    { id: 20, name: "Geography",         description: "i need to show maps",                           dueDate: "2023-02-15",      pinned: false },
    { id: 21, name: "Calculus",          description: "it's so hard and i need to read about theroem", dueDate: "2023-02-18",      pinned: true  },
    { id: 22, name: "English",           description: "revision on grammar and centaxt",               dueDate: "2023-02-20",      pinned: false },
    { id: 23, name: "French",            description: "i need to save some words",                     dueDate: "2023-02-24",      pinned: false },
    { id: 24, name: "Compiler",          description: "read about some grammers",                      dueDate: "2023-02-27",      pinned: false },
    { id: 25, name: "CyperSecurity",     description: "read about ciphers",                            dueDate: "2023-03-05",      pinned: false },
    { id: 26, name: "Managment",         description: "",                                              dueDate: "2023-03-10",      pinned: false },
    { id: 27, name: "Embedded",          description: "i will work in valeo",                          dueDate: "2023-03-19",      pinned: true  },
    { id: 28, name: "Test",              description: "i need to project",                             dueDate: "2023-03-20",      pinned: false },
    { id: 29, name: "Operating system",  description: "revision on C++",                               dueDate: "2023-03-27",      pinned: false },
    { id: 30, name: "Microprocessor",    description: "",                                              dueDate: "2023-03-30",      pinned: false },  

];

module.exports= {notes, };*/