const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    userName  : {type : String},
    password  : {type : String}, 
    email     : {type : String},
    accessKey : {type : String},
    customers : [{type : mongoose.Schema.Types.ObjectId, ref: "User"}],
    receips : [{type : mongoose.Schema.Types.ObjectId, ref: "Receip"}]
    
});


module.exports = mongoose.model('User', userSchema);