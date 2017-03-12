var fs = require('fs'),
    busboy = require('busboy'),
    express = require('express')(),
    mailparser = require('mailparser').simpleParser,
    mongoose = require('mongoose');

express.listen(process.env.PORT || 80, function () {
    console.log("Already listening")
})

mongoose.connect('mongodb://chanx:nandapur@ds121190.mlab.com:21190/heroku_0nlgsktq')
var mixed = mongoose.Schema.Types.Mixed;
var mailSchema = mongoose.Schema({
    data: mixed
})
express.post('/', function (req, res) {
    //var m = mongoose.model('mailer',mailSchema);
    var bboy = new busboy({headers: req.headers});
    console.log(bboy)
    bboy.on('field', function (fieldname, val, fieldnameTruncated, valTruncated) {
        console.log(fieldname, val, fieldnameTruncated, valTruncated)
    });
    bboy.on('finish', function() {
        console.log('Done parsing form!');
        res.writeHead(303, { Connection: 'close', Location: '/' });
        res.end();
    });
    req.pipe(bboy);
});

express.get('/data', function (req,res)
{
    var C = mongoose.collection('mailer');
    C.find().exec(function (err, resp) {
        console.log(resp);
    })
})