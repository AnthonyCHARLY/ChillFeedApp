const usersRouter = require('express').Router();


const { createUser , loginUser , addCustomer ,addReceip, getCustomers,getUserReceipsInfo } = require('../controllers/userController');


usersRouter.route('/addOne').post(async(req,res)=> {
    let response = await createUser(req.body);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});

usersRouter.route('/log-in').post(async(req,res)=> {
    let response = await loginUser(req.body.email,req.body.password);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
       
})
usersRouter.route('/:id/addCustomer').post(async(req,res)=> {
    let response = await addCustomer(req.params.id,req.body);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});
usersRouter.route('/:id/addReceip').post(async(req,res)=> {
    let response = await addReceip(req.params.id,req.body);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});
usersRouter.route('/getCustomers/:id').get(async(req,res)=> {
    let response = await getCustomers(req.params.id);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});

usersRouter.route('/:id/receipsInfos').get(async(req,res)=> {
    let response = await getUserReceipsInfo(req.params.id);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});



module.exports = usersRouter