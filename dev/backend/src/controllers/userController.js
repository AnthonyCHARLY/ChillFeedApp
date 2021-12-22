const User = require('../models/userModel');


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


        console.log(body);

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
        return { success: false, message: "cannot add user " + err };
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

