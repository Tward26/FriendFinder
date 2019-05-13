const express = require('express');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HTML routing
require("./app/routing/htmlRoutes")(app);

//API routing
require("./app/routing/apiRoutes")(app);

//HTML catch-all route
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
});


//Start server by listening on port
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});