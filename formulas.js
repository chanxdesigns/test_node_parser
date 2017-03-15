const mail = "Have good day dea everyday is a \r\nnew day.";

/***--------------------------------------
 | Generate Extraction Template
 |--------------------------------------*/

function MailObj () {}

MailObj.prototype.msg = mail;

/**
 * Find the Starting Position
 * @constructor
 */
function StartPos () {
}

StartPos.prototype = Object.create(MailObj.prototype);

/**
 * Match text before the specified keyword
 * @param txt
 * @returns {*}
 */
StartPos.prototype.textBeforeMatch = function (txt) {
    return this.msg = this.msg.substr(mail.indexOf(txt)-1).trim();
}

/**
 * Match text after the specified keyword
 * @param txt
 * @returns {*}
 */
StartPos.prototype.textAfterMatch = function (txt) {
    return this.msg = this.msg.substr(mail.indexOf(txt) + txt.length).trim();
}

/**
 * Find End Position
 */
function EndPos () {}

EndPos.prototype.textBeforeMatch = function (txt) {
    //return this.msg
}

console.log(StartPos.prototype.textBeforeMatch('ea'))
//console.log(StartPos.prototype.textAfterMatch('Have').toUpperCase())