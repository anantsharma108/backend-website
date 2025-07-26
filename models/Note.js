const mongoose= require('mongoose');
const noteSchema=new mongoose.Schema({
    content:'string'
});
module.exports=mongoose.model('Note',noteSchema)
