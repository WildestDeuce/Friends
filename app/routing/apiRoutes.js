//A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
let friends = require('../data/friends');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    })

    app.post('/api/friends', function (req, res) {
        friends.push(req.body)
        res.json(true);
        var match = 0;
        var absoluteValueArray = [];
        var compare = 0;
        for (var i = 0; i < friendsHolder.length; i++) {
            for (var j = 0; j < friendsHolder.scores[j].length; j++) {
                var num1 = friendsHolder[i].scores[j];
                var num2 = req.body.scores[j];
                var absVal = Math.abs(num1 - num2);

                compare += absVal;
            }
            friendsHolder[i].absVal = parseInt(compare);
            absoluteValueArray.push(parseInt(compare));

            console.log(`Person: ${friendsHolder[i].name}\nAbosoluteValue: ${friendsHolder[i].absVal}\n`)
        }
        absoluteValueArray.sort();
        console.log(`Sorted:${absoluteValueArray[0]}`)
        var minimum = Math.min(...absoluteValueArray)

        for (k = 0; k < friendsHolder.length; k++) {
            if (parseInt(minimum === friendsHolder[k].absVal){
                match = friendsHolder[k];
            }
        }
    })
};