var fs = require('fs'),
    body_parser = require('body-parser'),
    express = require('express')(),
    mailparser = require('mailparser').simpleParser,
    mongoose = require('mongoose');

express.use(body_parser.urlencoded({ extended: false }));

express.listen(process.env.PORT || 80, function () {
    console.log("Already listening")
})

express.post('/', function (req, res) {
    var mixed = mongoose.Schema.Types.Mixed;
    var mailSchema = mongoose.Schema({
        data: mixed
    })
    var m = mongoose.model('mail',mailSchema);
    var doc= new m ({
        data: req.body
    })
    doc.save(function (err, data) {
        console.log(data);
    });
    res.send(200);
});