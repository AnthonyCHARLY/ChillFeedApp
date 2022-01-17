const mongoose = require('mongoose');


const ingredientSchema = new mongoose.Schema({
    name      : {type : String},
    protein   : {type : Number},
    lipid     : {type : Number},
    carbs     : {type : Number},
    kcal      : {type : Number},
    unit     : {type : String}, 
    quantity  : {type : Number}
});


module.exports = mongoose.model('Ingredient', ingredientSchema);