
const router = require('express').Router(); 

const usersRoutes = require("../routes/users");
const customersRoutes = require('../routes/customers');
const ingredientsRouter = require('../routes/ingredients');
const receipsRouter = require('../routes/receips')

router.use('/users', usersRoutes);
router.use('/customers',customersRoutes);
router.use('/ingredients',ingredientsRouter);
router.use('/receips',receipsRouter);



router.get('/',function (req, res, next){ 
    res.status(200).json({
        status: 'API is working',
        message: 'Welcome ! ',
    });
    next();
    
    
});




module.exports = router