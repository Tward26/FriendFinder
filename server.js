const express = require('express');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//serves css and images inisde public folder
app.use(express.static('./app/public'))

//API routing
require("./app/routing/apiRoutes")(app);

//HTML routing
require("./app/routing/htmlRoutes")(app);

//Start server by listening on port
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});