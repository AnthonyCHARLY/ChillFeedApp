const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    userName  : {type : String},
    password  : {type : String}, 
    email     : {type : String},
    accessKey : {type : String},
    customers : [{type : mongoose.Schema.Types.ObjectId, ref: "Customer"}],
    receips : [{type : mongoose.Schema.Types.ObjectId, ref: "Receip"}],
    ingredients : [{type : mongoose.Schema.Types.ObjectId, ref: "Ingredient"}]
    
});

/**
 * Mongoose pre middleware function that will be called before any user document 
 * is saved or changed. And has the overall purpose of hashing 
 * the password whenever a user document is saved to the database with a new password value.
 */


userSchema.pre("save", function (next) {
    const user = this
  
    if (this.isModified("password") || this.isNew) {
      bcrypt.genSalt(10, function (saltError, salt) {
        if (saltError) {
          return next(saltError)
        } else {
          bcrypt.hash(user.password, salt, function(hashError, hash) {
            if (hashError) {
              return next(hashError)
            }
  
            user.password = hash
            next()
          })
        }
      })
    } else {
      return next()
    }
  })
  
userSchema.methods.comparePassword = async function(password) {
  let res = await bcrypt.compare(password, this.password)
  return res;
} 


module.exports = mongoose.model('User', userSchema);