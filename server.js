// Global
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const methodOverride = require('method-override');
const routes = require("./controllers/burgers_controller");
// Express
const app = express();
const PORT = process.env.PORT || 8080;
// Put Method
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine","handlebars");
// Routing + Public Folder
app.use("/", routes);
app.use(express.static('public'));
// Listener
app.listen(PORT,function(){
    //console.log("App now listening at localhost:" + PORT);
});