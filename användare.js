const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    uName: String,
    password: String
});

const Användare = mongoose.model("Användare", userSchema);

exports.saveAnvändare = function (inUser, inPassword) {
    var user = new Användare({
        uName: inUser,
        password: inPassword
    });
    user.save();
};

exports.getUser = async function (Uuser){
    return await Användare.findOne({ uName: Uuser });
}