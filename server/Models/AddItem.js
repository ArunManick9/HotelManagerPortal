const mongoose = require('mongoose');

const item_list_foodSchema = new mongoose.Schema({
        
    pname:String,
    image:String,
    details:String
})

module.exports = mongoose.model("item_list_food",item_list_foodSchema);