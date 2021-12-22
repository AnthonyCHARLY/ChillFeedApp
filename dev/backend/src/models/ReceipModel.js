const mongoose = require('mongoose');


const receipSchema = new mongoose.Schema({
    name      : {type : String},
    ingredients : [{type : mongoose.Schema.Types.ObjectId, ref: "Ingredient"}],
    
});


module.exports = mongoose.model('Receip', receipSchema);