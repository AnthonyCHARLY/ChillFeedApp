const mongoose = require('mongoose');


const customerSchema = new mongoose.Schema({
    name      : {type : String},
    email     : {type : String},
    age       : {type : Number}, 
    weight    : {type : Number}, 
    height    : {type : Number}, 
    morphology: {type : String}, 
    activity  : {type : String},
    goal      : {type : String},
    weightGoal: {type : String},
    receips : [{type : mongoose.Schema.Types.ObjectId, ref: "Receip"}]
    
});


module.exports = mongoose.model('Customer', customerSchema)