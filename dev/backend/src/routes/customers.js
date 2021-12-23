const customerRouter = require('express').Router();

const { getCustomerByEmail } = require('../controllers/customerController');

customerRouter.route('/findOne').post(async(req,res)=> {
    let response = await getCustomerByEmail(req.body);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});



module.exports = customerRouter