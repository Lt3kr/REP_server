const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Slutprojekt', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("We are connected!");
});