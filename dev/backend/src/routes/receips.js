const receipsRouter =require('express').Router();

const { findNames, removeReceip , findByName } = require('../controllers/receipController');

/**
 * @openapi
 * 
 * /receips/getNames:
 *   get:
 *     tags: [Receip]
 *     description: all receips names
 *     responses:
 *       '200':
 *         description: Returns an array of receips names 
 *       '404':
 *         description: error 
 */
receipsRouter.route('/getNames').get(async(req,res)=> {
    let response = await findNames();
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});
/**
 * @openapi
 * 
 * /receips/findOneByName/name:
 *   get:
 *     tags: [Receip] 
 *     description: get a receip found by his name
 *     responses:
 *       '200':
 *         description: Returns the receip found
 *       '404':
 *         description: error 
 */
receipsRouter.route('/findOneByName/:name').get(async(req,res)=> {
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
 * /receips/id/deleteOne:
 *   delete:
 *     tags: [Receip] 
 *     description: delete a receip found by his id 
 *     responses:
 *       '200':
 *         description: 
 *       '404':
 *         description: error 
 */
receipsRouter.route('/:id/deleteOne').delete(async(req, res) => {
    let response = await removeReceip(res.params.id);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});



module.exports = receipsRouter 