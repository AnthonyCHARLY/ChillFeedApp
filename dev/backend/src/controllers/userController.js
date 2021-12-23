const User = require('../models/userModel');
const Customer = require('../models/customerModel');


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
