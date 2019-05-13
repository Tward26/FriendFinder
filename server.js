const express = require('express');
const path = require('path');
const friends = require('./app/data/friends')

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//HTML routing
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});

//API routing
app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

app.post("/api/friends", function (req, res) {
    const newFriend = req.body;
    friends.push(newFriend);
    res.send(true)
});


//HTML catch-all route
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
});



//Start server by listening on port
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});