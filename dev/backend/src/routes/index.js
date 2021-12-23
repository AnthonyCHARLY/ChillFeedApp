
const router = require('express').Router(); 

const usersRoutes = require("../routes/users");
const customersRoutes = require('../routes/customers')

router.use('/users', usersRoutes);
router.use('/customers',customersRoutes);


router.get('/',function (req, res, next){ 
    res.status(200).json({
        status: 'API is working',
        message: 'Welcome ! ',
    });
    next();
    
    
});




module.exports = router