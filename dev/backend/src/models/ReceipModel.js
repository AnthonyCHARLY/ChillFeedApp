const mongoose = require('mongoose');


const receipSchema = new mongoose.Schema({
    name      : {type : String},
    protein   : {type : Number},
    lipid     : {type : Number},
    carbs     : {type : Number},
    kcal      : {type : Number},
    ingredients : [{type : mongoose.Schema.Types.ObjectId, ref: "Ingredient"}],
    
});




module.exports = mongoose.model('Receip', receipSchema);
