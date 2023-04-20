const { app } =require('./app');
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;
app.listen(port,async () => { 
    await mongoose.connect("mongodb+srv://Test_Notes:0123@cluster0.zxot3yp.mongodb.net/test");
    console.log(`listening on port ${port} ...`); });