const User = require('../models/userModel');
const Customer = require('../models/customerModel');
const Receip = require('../models/ReceipModel');
const Ingredient = require('../models/IngredientModel');

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


module.exports.addCustomer = async function(id, body) {
    try {
        let customer = new Customer({
            ...body
        });


        let user = await User.findById(id);

        user.customers.push(customer);


        customer.save().then(doc => {}).catch(err => {});
        user.save().then(doc => {}).catch(err => {});

        return {
            success: true,
            data: customer
        }

    } catch (err) {
        return {
            success: false,
            message: "can not add customer " + err
        };
    }
}

module.exports.getCustomers = async function(id) {
    try {

        let user = await User.findById(id);

        let customers = user.customers;

        return {
            success: true,
            data: customers
        }

    } catch (err) {
        return {
            success: false,
            message: "can not find user's customers " + err
        };
    }
}

module.exports.addIngredient = async function(id,body){
    try{
        let ingredient  = new Ingredient({
            ...body
        });
        let user = await User.findById(id);

        user.ingredients.push(ingredient);

        ingredient.save().then(doc => {}).catch(err => {});
        user.save().then(doc => {}).catch(err => {});

        return {
            success: true,
            data: ingredient
        };
    } catch (err) {
        return {
            success: false,
            message: "can not add ingredient" + err
        };
    }
}

module.exports.getIngredients = async function(id) {
    try {
        let user = await User.findById(id);

        let ingredients = user.ingredients;

        if (!ingredients) {
            return {
                success: false,
                msg: "ingredients not found",
            }

        } else {
            return {
                success: true,
                data: ingredients,
            }
        }


    } catch (err) {
        return {
            success: false,
            msg: "can't search ingredients name " + err,
        }
    }
}

module.exports.addReceip = async function(id, body) {
    try {
        let receip = new Receip({
            ...body
        });
        let user = await User.findById(id);

        user.receips.push(receip);


        receip.save().then(doc => {}).catch(err => {});
        user.save().then(doc => {}).catch(err => {});

        return {
            success: true,
            data: receip
        };

    } catch (err) {
        return {
            success: false,
            message: "can not add receip " + err
        };
    }
}

module.exports.getUserReceipsInfo = async function(id) {
    try {
        let user = await User.findById(id)
        let recipes = user.receips;

        return {
            success: true,
            data: recipes
        }

    } catch (err) {
        return {
            success: false,
            message: "can not get user Receips info " + err
        };
    }
}

module.exports.removeReceip = async function(id, idR) {
    try {

        let user = await User.findOne({ _id: id });

        if (!user) {
            return {
                success: false,
                msg: ' not found'
            }
        }

        let index = user.receips.indexOf(idR);
        if (index !== -1) {
            user.receips.splice(index, 1);
        } else {
            return { success: false, message: "cannot find receip index in user" + err };
        }


        await Receip.deleteOne({ _id: idR }).then(doc => {}).catch(err => {});

        user.save().then(doc => {}).catch(err => {});

        let receips = await User.findById(id).select('receips -_id').populate('receips');

        return {
            success: true,
            data: receips
        }


    } catch (err) {
        return { success: false, message: "cannot remove receip " + err };
    }
}
module.exports.removeClient = async function(id, idC) {
    try {

        let user = await User.findOne({ _id: id });





        if (!user) {
            return {
                success: false,
                msg: ' not found'
            }
        }

        let index = user.customers.indexOf(idC);
        if (index !== -1) {
            user.customers.splice(index, 1);
        } else {
            return { success: false, message: "cannot find customer index in user" + err };
        }


        await Customer.deleteOne({ _id: idC }).then(doc => {}).catch(err => {});

        user.save().then(doc => {}).catch(err => {});




        let customers = await User.findById(id).select('customers -_id').populate('customers');

        console.log(customers);

        return {
            success: true,
            data: customers
        }


    } catch (err) {
        return { success: false, message: "cannot remove client " + err };
    }
}