var fs = require('fs'),
    body_parser = require('body-parser'),
    express = require('express')(),
    mailparser = require('mailparser').simpleParser;

express.listen(process.env.PORT || 80, function () {
    console.log("Already listening")
})

express.post('/', function (req, res) {
    console.log(req, res);
});