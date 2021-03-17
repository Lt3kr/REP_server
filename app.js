const express = require('express');
const databaseModule = require("./databaseModule")
const app = express();
const port = 3000;
const staticdir = __dirname + "\\static\\";
const användareModel = require("./användare")

app.use(express.static(staticdir));
app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => res.sendFile(staticdir + "html\\index.html"));

app.post("/signUp", async (req, res) => {
    användareModel.saveAnvändare(req.body.User, req.body.password)
    res.redirect("/")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));