// Create web server

var express = require('express');
var app = express();

app.get('/comments', function(req, res) {
    res.send('Comments page');
});

app.listen(3000, function() {
    console.log('Server is running at http://localhost:3000');
});
