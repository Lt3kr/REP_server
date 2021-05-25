const mongoose = require("mongoose")

const köpSchema = new mongoose.Schema({
    Köplistan: String
});

const Köplista = mongoose.model("Köplista", köpSchema);

exports.saveLista = function (inSpara) {
    var köplistan = new Köplista ({
        Köplistan: inSpara
    });
    köplistan.save();
};

exports.getKöplista = async function (){
    return await Köplista.find();
}