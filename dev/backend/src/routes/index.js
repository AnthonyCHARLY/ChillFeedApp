
const router = require('express').Router(); 

const usersRoutes = require("../routes/users");


router.use('/users', usersRoutes);


router.get('/',function (req, res, next){ 
    res.status(200).json({
        status: 'API is working',
        message: 'Welcome ! ',
    });
    next();
    
    
});




module.exports = router