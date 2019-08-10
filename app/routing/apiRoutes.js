//A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
let friends = require('../data/friends');

module.exports = function(app){
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    })
    app.post('/api/friends', function(req, res){
        res.json(true);
    })
};