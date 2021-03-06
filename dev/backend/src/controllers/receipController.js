const Receip = require('../models/ReceipModel');

module.exports.findNames = async function() {
    try {
        let receips = await Receip.find({}).distinct('name');


        if (!receips) {
            return {
                success: false,
                msg: "receips not found",
            }

        } else {
            return {
                success: true,
                data: receips,
            }
        }


    } catch (err) {
        return {
            success: false,
            msg: "can't search receips name " + err,
        }
    }
}

module.exports.findById = async function(id) {
    try {
        let recipe = await Receip.findById(id);

        if (!recipe) {
            return {
                success: false,
                msg: "recipe not found",
            }

        } else {
            return {
                success: true,
                data: recipe,
            }
        }


    } catch (err) {
        return {
            success: false,
            msg: "can't found recipe by Id " + err,
        }
    }
}

module.exports.findByName = async function(name) {
    try {
        let receip = await Receip.findOne({
            name: name
        });

        if (!receip) {
            return {
                success: false,
                msg: "receip not found",
            }

        } else {
            return {
                success: true,
                data: receip,
            }
        }


    } catch (err) {
        return {
            success: false,
            msg: "can't search ingredient by name " + err,
        }
    }
}

module.exports.removeReceip = async function(id) {
    try {

        await Receip.deleteOne(id)
            .then(doc => {})
            .catch(err => {});

        return {
            success: true,
        }

    } catch (err) {
        return { success: false, message: "cannot remove receip " + err };
    }
}