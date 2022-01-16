const ingredientsRouter =require('express').Router();


const { addIngredient , findByName, findNames, findById} = require('../controllers/ingredientController');
/**
 * @openapi
 * 
 * /ingredients/findById/id:
 *   get:
 *     tags: [Ingredient]
 *     description: find an ingredient by his id
 *     responses:
 *       '200':
 *         description: Returns the ingredient
 *       '404':
 *         description: error 
 */
 ingredientsRouter.route('/findById/:id').get(async(req,res)=> {
    let response = await findById(req.params.id);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});
/**
 * @openapi
 * /ingredients/addOne:
 *   post:
 *     tags: [Ingredient] 
 *     description: add a new ingredient
 *     responses:
 *       '200':
 *         description: Returns a new ingredient
 *       '404':
 *         description: error 
 *
 */
ingredientsRouter.route('/addOne').post(async(req,res)=> {
    let response = await addIngredient(req.body);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});
/**
 * @openapi
 * /ingredients/findOneByName/name:
 *   get:
 *     tags: [Ingredient] 
 *     description: find an Ingredient by name
 *     responses:
 *       '200':
 *         description: Returns the ingredient found
 *       '404':
 *         description: error 
 */
ingredientsRouter.route('/findOneByName/:name').get(async(req,res)=> {
    let response = await findByName(req.params.name);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});
/**
 * @openapi
 * 
 * /ingredients/getNames:
 *   get:
 *     tags: [Ingredient] 
 *     description: all ingredient names
 *     responses:
 *       '200':
 *         description: Returns an array of ingredient names 
 *       '404':
 *         description: error 
 */
ingredientsRouter.route('/getNames').get(async(req,res)=> {
    let response = await findNames();
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});

module.exports = ingredientsRouter 