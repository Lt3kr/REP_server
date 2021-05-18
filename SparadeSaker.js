const mongoose = require("mongoose")

const köpSchema = new mongoose.Schema({
    Köplistan: String
});

const Köplista = mongoose.model("Köplista", köpSchema);

exports.saveLista = function (inSpara) {
    var Köplistan = new Köplista ({
        Köplistan: inSpara
    });
    Köplistan.save();
};

exports.getKöplista = async function (USpara){
    return await Köplista.findOne();
}