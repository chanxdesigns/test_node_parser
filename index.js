var fs = require('fs'),
    body_parser = require('body-parser'),
    express = require('express')(),
    mailparser = require('mailparser').simpleParser;

express.use(body_parser.json());

express.listen(process.env.PORT || 80, function () {
    console.log("Already listening")
})

express.post('/', function (req, res) {
    mailparser(req.body, function (err, data) {
        console.log(data);
    })
});