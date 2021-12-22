const usersRouter = require('express').Router();


const { createUser , loginUser } = require('../controllers/userController');


usersRouter.route('/addOne').post(async(req,res)=> {
    let response = await createUser(req.body);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});

usersRouter.route('/findOne').post(async(req,res)=> {
    let response = await loginUser(req.body.email,req.body.password);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
       
})


module.exports = usersRouter