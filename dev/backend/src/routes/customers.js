const customerRouter = require('express').Router();

const { getCustomerByEmail, findById , updateCustomerWeight } = require('../controllers/customerController');

/**
 * @openapi
 * 
 * /customers/findOne:
 *   post:
 *     tags: [Customer]
 *     description: find a customer
 *     responses:
 *       '200':
 *         description: Returns the customer
 *       '404':
 *         description: error 
 */
customerRouter.route('/findOne').post(async(req,res)=> {
    let response = await getCustomerByEmail(req.body);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});

/**
 * @openapi
 * 
 * /customers/findById/id:
 *   get:
 *     tags: [Customer]
 *     description: find a customer by his id
 *     responses:
 *       '200':
 *         description: Returns the customer
 *       '404':
 *         description: error 
 */
customerRouter.route('/findById/:id').get(async(req,res)=> {
    let response = await findById(req.params.id);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});
/**
 * @openapi
 * 
 * /customers/updateWeight/id/weight:
 *   put:
 *     tags: [Customer]
 *     description: update a customer weight found by his id
 *     responses:
 *       '200':
 *         description: Returns the customer updated
 *       '404':
 *         description: error 
 */
 customerRouter.route('/updateWeight/:id/:w').put(async(req,res)=> {
    let response = await updateCustomerWeight(req.params.id,req.params.w);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});


module.exports = customerRouter