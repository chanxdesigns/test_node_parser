var fs = require('fs'),
    body_parser = require('body-parser'),
    express = require('express')();

express.use(body_parser.raw);

express.listen(process.env.PORT || 80, function () {
    console.log("Already listening")
})

express.post('/', function (req, res) {
    console.log(req.body);
});