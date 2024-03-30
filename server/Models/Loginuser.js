const mongoose = require('mongoose');

const loginusersSchema = new mongoose.Schema({

    name:String,
    password:String
})

module.exports = mongoose.model("loginusers",loginusersSchema);