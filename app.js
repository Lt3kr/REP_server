const express = require('express');
const databaseModule = require("./databaseModule");
const app = express();
const port = 3000;
const staticdir = __dirname + "\\static\\";
const användareModel = require("./användare");
const bcrypt = require("bcryptjs");
const SparadeSaker = require('./SparadeSaker');

app.use(express.static(staticdir));
app.use(express.urlencoded());
app.use(express.json());

app.set("view engine", "ejs");

app.get('/', (req, res) => res.sendFile(staticdir + "html\\index.html"));

app.post("/signUp", async (req, res) => {
    const hasedPassword = await bcrypt.hash(req.body.password, 10);
    användareModel.saveAnvändare(req.body.User,  hasedPassword);
    res.redirect("/");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.post("/logIn", async (req, res) => {
    const user = await användareModel.getUser(req.body.User);
    await bcrypt.compare(req.body.password, user.password, (err, success) => {
        if (err){
            console.log(err);
        }
        
        if (success){ 
            console.log("success");
            res.render("kundvagn.ejs");
        }
        else console.log("Fail");
    });
});

app.post("/SparadeSaker", async (req, res) => {
    SparadeSaker.saveLista(req.body.Koplistan);
    console.log(req.body.Koplistan);
    res.render("kundvagn.ejs");
});

app.get("/kundvagn", async (req, res) => {
    const köpt = await SparadeSaker.getKöplista();
    res.render("./kundvagn.ejs", { Recent: köpt });
});