const connection = require("./model");
const express = require("express");
const application = express();
const path = require("path");
const expressHandlebars = require("express-handlebars");
const bodyparser = require("body-parser");
const dataController = require("./controllers/data")
application.use(bodyparser.urlencoded({
    extended : true
}));

application.set('views', path.join(__dirname, "/views/"));

application.engine("hbs", expressHandlebars({
    extname : "hbs",
    defaultLayout : "mainlayout",
    layoutsDir : __dirname + "/views/layouts"
}));

application.set("view engine","hbs");

application.get("/", (req, res)=>{
    //res.send('<h1> This is the main page!!</h1>')
    res.render("index", {})
})

application.use("/data" , dataController)

application.listen("3000", ()=>{
    console.log("Server started");
});

