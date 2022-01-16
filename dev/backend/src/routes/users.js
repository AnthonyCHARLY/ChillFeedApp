const usersRouter = require('express').Router();


const { createUser, loginUser, addCustomer, addReceip, addIngredient, getIngredients, getCustomers, getUserReceipsInfo, removeReceip , removeClient } = require('../controllers/userController');

/**
 * @openapi
 * 
 * /users/addOne:
 *   post:
 *     tags: [User]
 *     description: add a user
 *     responses:
 *       '200':
 *         description: Returns the user
 *       '404':
 *         description: error
 */
usersRouter.route('/addOne').post(async(req,res)=> {
    let response = await createUser(req.body);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});
/**
 * @openapi
 * 
 * /users/log-in:
 *   post:
 *     tags: [User]
 *     description: user's log in 
 *     responses:
 *       '200':
 *         description: Returns the current user
 *       '404':
 *         description: error 
 */
usersRouter.route('/log-in').post(async(req,res)=> {
    let response = await loginUser(req.body.email,req.body.password);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
       
})
/**
 * @openapi
 * 
 * /users/id/addCustomer:
 *   post:
 *     tags: [User]
 *     description: add a user
 *     responses:
 *       '200':
 *         description: Returns the user
 *       '404':
 *         description: error 
 */
usersRouter.route('/:id/addCustomer').post(async(req,res)=> {
    let response = await addCustomer(req.params.id,req.body);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});
/**
 * @openapi
 * 
 * /users/id/addReceip:
 *   post:
 *     tags: [User]
 *     description: add a receip to user
 *     responses:
 *       '200':
 *         description: Returns the receip
 *       '404':
 *         description: error 
 */
usersRouter.route('/:id/addReceip').post(async(req,res)=> {
    let response = await addReceip(req.params.id,req.body);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});
/**
 * @openapi
 * 
 * /users/id/addIngredient:
 *   post:
 *     tags: [User]
 *     description: add an ingredient to user
 *     responses:
 *       '200':
 *         description: Returns the ingredient
 *       '404':
 *         description: error 
 */
usersRouter.route('/:id/addIngredient').post(async(req,res)=> {
    let response = await addIngredient(req.params.id,req.body);
    if(response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
})
/**
 * @openapi
 * 
 * /users/getIngredients/id:
 *   get:
 *     tags: [User]
 *     description: get user ingredients
 *     responses:
 *       '200':
 *         description: Returns user ingredients
 *       '404':
 *         description: error 
 */
 usersRouter.route('/getIngredients/:id').get(async(req,res)=> {
    let response = await getIngredients(req.params.id);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});
/**
 * @openapi
 * 
 * /users/getCustomers/id:
 *   get:
 *     tags: [User]
 *     description: get user customers
 *     responses:
 *       '200':
 *         description: Returns the customers
 *       '404':
 *         description: error 
 */
usersRouter.route('/getCustomers/:id').get(async(req,res)=> {
    let response = await getCustomers(req.params.id);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});
/**
 * @openapi
 * 
 * /users/id/receipsInfos:
 *   get:
 *     tags: [User]
 *     description: get user receips info
 *     responses:
 *       '200':
 *         description: Returns receips info
 *       '404':
 *         description: error 
 */
usersRouter.route('/:id/receipsInfos').get(async(req,res)=> {
    let response = await getUserReceipsInfo(req.params.id);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});
/**
 * @openapi
 * 
 * /users/id/deleteReceip/idReceip:
 *   delete:
 *     tags: [Customer] 
 *     description: delete a user receip found by his id 
 *     responses:
 *       '200':
 *         description: 
 *       '404':
 *         description: error 
 */
 usersRouter.route('/:id/deleteReceip/:idR').delete(async(req, res) => {
    let response = await removeReceip(req.params.id,req.params.idR);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});

/**
 * @openapi
 * 
 * /users/id/deleteClient/idClinet:
 *   delete:
 *     tags: [Customer] 
 *     description: delete a user Client found by his id 
 *     responses:
 *       '200':
 *         description: 
 *       '404':
 *         description: error 
 */
 usersRouter.route('/:id/deleteClient/:idC').delete(async(req, res) => {
    let response = await removeClient(req.params.id,req.params.idC);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});


module.exports = usersRouter