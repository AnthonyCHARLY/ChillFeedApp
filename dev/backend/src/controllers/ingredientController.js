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
module.exports.findByName = async function(name){
    try{
        let ingredient = await Ingredient.findOne({
            name:name
        });

        console.log(ingredient);

        if(!ingredient){
            return {
                success: false,
                msg:"ingredient not found",
            }
            
        }else{
            return {
                success: true,
                data: ingredient,
            }
        }


    }catch(err){
        return {
            success: false,
            msg:"can't search ingredient by name "+err,
        }
    }
}
