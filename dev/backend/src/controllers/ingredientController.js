const Ingredient = require('../models/IngredientModel')



module.exports.addIngredient = async function(body){
    try {
        let ingredient = new Ingredient({
            ...body
        });

        ingredient.save().then(doc =>{}).catch(err =>{});

        return {
            success: true,
            data: ingredient
        }

    }catch(err){
        return {
            success : false,
            message :"can not add ingredient " + err
        };
    }
}
