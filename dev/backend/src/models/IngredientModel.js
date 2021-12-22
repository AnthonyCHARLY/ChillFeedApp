const mongoose = require('mongoose');


const ingredientSchema = new mongoose.Schema({
    name      : {type : String},
    protein   : {type : Number},
    lipid     : {type : Number},
    carbs     : {type : Number},
    Kcal      : {type : Number},
});


module.exports = mongoose.model('Ingredient', ingredientSchema);