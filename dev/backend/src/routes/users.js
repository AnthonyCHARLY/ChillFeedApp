const usersRouter = require('express').Router();


const { addUser } = require('../controllers/userController');


usersRouter.route('/addOne').post(async(req,res)=> {
    let response = await addUser(req.body);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});



module.exports = usersRouter