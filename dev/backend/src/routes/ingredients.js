const ingredientsRouter =require('express').Router();


const { addIngredient } = require('../controllers/ingredientController');

ingredientsRouter.route('/addOne').post(async(req,res)=> {
    let response = await addIngredient(req.body);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});


module.exports = ingredientsRouter 