const receipsRouter =require('express').Router();

const { findNames } = require('../controllers/receipController');


receipsRouter.route('/getNames').get(async(req,res)=> {
    let response = await findNames();
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});
receipsRouter.route('/findOneByName/:name').get(async(req,res)=> {
    let response = await findByName(req.params.name);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});

module.exports = receipsRouter 