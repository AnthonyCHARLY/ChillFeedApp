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
        return { success: false, message: "cannot find customer " + err };
    }

}

module.exports.findById = async function(id){
    try{
        let customer = await Customer.findById(id);

        if(!customer){
            return {
                success: false,
                msg:"customer not found",
            }
            
        }else{
            return {
                success: true,
                data: customer,
            }
        }


    }catch(err){
        return {
            success: false,
            msg:"can't search customer by Id "+err,
        }
    }
}

module.exports.updateCustomerWeight = async function(idCustomer,weight){
    try{
        
        let customer = await Customer.findByIdAndUpdate(
            {_id : idCustomer },
            { weight : Number(weight) }
        ).exec();
        
        customer = await Customer.findById(idCustomer); 
        customer.weightCurve.push(weight);
        customer.save();
        console.log(customer);

        if(!customer){
            return {
                success: false,
                msg:"customer not found",
            }
            
        }else{
            return {
                success: true,
                data: customer,
            }
        }


    }catch(err){
        return {
            success: false,
            msg:"can't update customer's weight "+err,
        }
    }
}



