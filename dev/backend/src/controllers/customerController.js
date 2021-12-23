const Customer = require('../models/customerModel');


module.exports.getCustomerByEmail = async function(body) {
    try {
        console.log(body.email);
        let customer = await Customer.findOne({
            email: body.email
        });

        if (!customer) {

            return {
                success: false,
                msg: "customer does not exists"
            }
        } else {
            
            return {
            success: true,
            msg: customer
            }
            
          }
    } catch (err) {
        return { success: false, message: "cannot find user " + err };
    }

}