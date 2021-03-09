const express = require('express');
const app = express();
const port = 3000;
const staticdir = __dirname + "\\static\\";

app.use(express.static(staticdir));
app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => res.sendFile(staticdir + "html\\index.html"));

app.get("/contact", (req, res) =>
    res.sendFile(staticdir + "html\\contact.html")
);

app.post("/contact", (res, req) =>{
    console.log(req.body.Fname);
    console.log(req.body.Date);
    res.redirect("/");
})

app.post("/signUp", (res, req) => {
    console.log(req.body.uName);
    console.log(req.body.password);
    res.redirect("/")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));