var prompt = require('prompt-sync')();
var i = +prompt(' la nombe de depart : ');
while ( i >= 0 ) {
console.log(i);
i--
}
console.log('Décollage !');
