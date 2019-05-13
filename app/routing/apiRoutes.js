const friends = require('../data/friends')

module.exports = function(app) {
    //API routing
app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

app.post("/api/friends", function (req, res) {
    const newFriend = req.body;
    friends.push(newFriend);
    res.send(true)
});
}