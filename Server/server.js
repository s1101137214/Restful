var Http = require('http'),
    Router = require('router'),
    express = require('express'),
    server,
    router;
router = new Router();

var app = express();

// server = Http.createServer(function (request, response) {
//     router(request, response, function (error) {
//         if (!error) {
//             response.writeHead(404);
//         } else {
//             // Handle errors
//             console.log(error.message, error.stack);
//             response.writeHead(400);
//         }

//         response.writeHead(200, {
//             'Content-Type': 'text/html'
//         });
//         response.write(Date() + "</br>");
//         response.end('RESTful API Server is running!');
//     });
// });

// server.listen(3000, function () {
//     console.log('Listening on port 3000');
// });

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