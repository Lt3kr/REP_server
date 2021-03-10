const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    Namn: String,
    Password: String
});

const användare = mongoose.model()