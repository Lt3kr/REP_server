const mongoose = require("mongoose")

const köptSchema = new mongoose.Schema({
    uSpara: String
});

const Köplista = mongoose.model("Köplista", köpSchema);

exports.sparadeSaker = function (inSpara) {
    var lista = new Köplista ({
        uSpara:inSpara
    });
    lista.save();
};

exports.getKöplista = async function (USpara){
    return await Köplista.findOne({ uSpara: USpara });
}