const mail = "Have good day dea everyday is a \r\nnew day.";

/***--------------------------------------
 | Generate Extraction Template
 |--------------------------------------*/

/**
 * Find the Starting Position
 * @constructor
 */
function StartPos () {
}

/**
 * Default Mail Storage
 * @type {string}
 */
StartPos.prototype.msg = mail;

/**
 * Match text before the specified keyword
 * @param txt
 * @returns {*}
 */
StartPos.prototype.textBeforeMatch = function (txt) {
    return this.msg = this.msg.substr(0, mail.indexOf(txt)).trim();
}

/**
 * Match text after the specified keyword
 * @param txt
 * @returns {*}
 */
StartPos.prototype.textAfterMatch = function (txt) {
    return this.msg = this.msg.substr(mail.indexOf(txt) + txt.length).trim();
}

console.log(StartPos.prototype.textBeforeMatch('day'))
console.log(StartPos.prototype.textAfterMatch('Have').toUpperCase())