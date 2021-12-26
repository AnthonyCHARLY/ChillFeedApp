const User = require('../models/userModel');
const Customer = require('../models/customerModel');
const Receip = require('../models/ReceipModel');

module.exports.createUser = async function(body) {
    try {

        let user = await User.findOne({
            email: body.email
        });
        if (user) {
            return {
                success: false,
                msg: "email Already Exists"
            }
        }

        user = new User({
            ...body
        });

        user.save()
            .then(doc => {})
            .catch(err => {});

        return {
            success: true,
            data: user

        }

    } catch (err) {
        return { success: false, message: "can not add user " + err };
    }

}


module.exports.loginUser = async function(email, password) {
    try {

        let user = await User.findOne({
            email: email
        });

        if (!user) {

            return {
                success: false,
                msg: "user does not exists"
            }
        } else {
            let isMatch = await user.comparePassword(password);
                if (isMatch) {
                  return {
                    success: true,
                    msg: user
                  }
                } else {
                  return {
                    success: false,
                    msg: "incorrect password"
                  }
                }
          }
    } catch (err) {
        return { success: false, message: "cannot find user " + err };
    }

}


module.exports.addCustomer = async function(id,body){
    try {
        let customer = new Customer({
            ...body
        });
       
        
        let user = await User.findById(id);
        
        user.customers.push(customer);


        customer.save().then(doc =>{}).catch(err =>{});
        user.save().then(doc =>{}).catch(err =>{});

        return {
            success: true,
            data: customer
        }

    }catch(err){
        return {
            success : false,
            message :"can not add customer " + err
        };
    }
}

module.exports.getCustomers = async function(id){
    try {

        let user = await User.findById(id);
        
        let customers = user.customers;

        return {
            success: true,
            data: customers
        }

    }catch(err){
        return {
            success : false,
            message :"can not find user's customers " + err
        };
    }
}

module.exports.addReceip = async function(id,body){
    try {
        console.log(body);
        let receip = new Receip({
            ...body
        });  
        let user = await User.findById(id);
        
        user.receips.push(receip);


        receip.save().then(doc =>{}).catch(err =>{});
        user.save().then(doc =>{}).catch(err =>{});

        return {
            success: true,
            data: receip
        }

    }catch(err){
        return {
            success : false,
            message :"can not add receip " + err
        };
    }
}
module.exports.getUserReceipsInfo = async function(id){
    try {

        let user_id = await User.findById(id).select('receips -_id').populate('receips');
       
        return {
            success: true,
            data: user_id
        }

    }catch(err){
        return {
            success : false,
            message :"can not get user Receips info " + err
        };
    }}
