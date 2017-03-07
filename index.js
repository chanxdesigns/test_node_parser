var fs = require('fs'),
    body_parser = require('body-parser'),
    express = require('express')();

express.use(body_parser.raw);

express.listen(80, function () {
    console.log("Already listening")
})

express.get('/', function (req, res) {
    console.log(req.body);
});