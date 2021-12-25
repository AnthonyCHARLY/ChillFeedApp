const ingredientsRouter =require('express').Router();


const { addIngredient , findByName, findNames} = require('../controllers/ingredientController');

ingredientsRouter.route('/addOne').post(async(req,res)=> {
    let response = await addIngredient(req.body);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});

ingredientsRouter.route('/findOneByName/:name').get(async(req,res)=> {
    let response = await findByName(req.params.name);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});

ingredientsRouter.route('/getNames').get(async(req,res)=> {
    let response = await findNames();
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});

module.exports = ingredientsRouter 