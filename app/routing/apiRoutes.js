//A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
let friends = require('../data/friends');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    })

    app.post('/api/friends', function (req, res) {
        friends.push(req.body)
        res.json(true);
        for (var i = 0; i < friendsHolder.length; i++) {
            for (var j = 0; j < friendsHolder.scores[j].length; j++) {

                Math.abs(value)
            }
        }
    })
};