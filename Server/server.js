var Http = require('http'),
    Router = require('router'),
    express = require('express'),
    server,
    router;
router = new Router();

var app = express();

//Json string.
app.get("/", function (request, response) {
    response.json({
        text: "Json string."
    })
})

//Params
app.get('/test/:id/:name', function (req, res) {
    res.send("input:" + req.params.id + '&' + req.params.name);
});

//Querystring
app.get('/test/:name', function (req, res) {
    res.send("input:" + req.params.name + ' querystring = ' + JSON.stringify(req.query));
});

//listen
app.listen(3000, function () {
    console.log('Listening on port 3000!');
});