let express = require("express");
let path = require("path");

let app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app/public"))

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
var friendsArray = require("./app/data/friends"); 

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});

