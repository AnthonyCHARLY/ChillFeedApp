const mongoose = require('mongoose');


const receipSchema = new mongoose.Schema({
    name      : {type : String},
    protein   : {type : Number},
    lipid     : {type : Number},
    carbs     : {type : Number},
    kcal      : {type : Number},
    ingredients : [{
       ingredient: {type : mongoose.Schema.Types.ObjectId, ref: "Ingredient"},
       qty: {type : Number , default : 1}
    }],
    
});




module.exports = mongoose.model('Receip', receipSchema);
