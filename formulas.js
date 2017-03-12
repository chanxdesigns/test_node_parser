const mail = "Have good day dea everyday is a \r\nnew day.";

function Formula() {
    
}
/***--------------------------------------
 | Generate Extraction Template
 |--------------------------------------*/

function StartPos () {
    this.index = [];
}

StartPos.prototype.indexes = [];

StartPos.prototype.textBeforeMatch = function (txt) {
    this.indexes.push({beforeIndex: Formula.beforeIndex, index: mail.indexOf(txt)})
    return mail.substr(0, mail.indexOf(txt));
}

StartPos.prototype.textAfterMatch = function (txt) {
    if (!Formula.hasOwnProperty('beforeIndex')) {
        Formula.beforeIndex = mail.indexOf(txt) + txt.length;
    }
    else {
        Formula.prototype.beforeIndex;
    }
    return mail.substr(mail.indexOf(txt) + txt.length);
}

console.log(StartPos.prototype.textAfterMatch('day'));
console.log(Formula.beforeIndex);