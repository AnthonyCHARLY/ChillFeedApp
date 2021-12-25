const Receip = require('../models/ReceipModel');

module.exports.findNames = async function(){
    try{
        let receips = await Receip.find({}).distinct('name');


        if(!receips){
            return {
                success: false,
                msg:"receips not found",
            }
            
        }else{
            return {
                success: true,
                data: receips,
            }
        }


    }catch(err){
        return {
            success: false,
            msg:"can't search receips name "+err,
        }
    }
}