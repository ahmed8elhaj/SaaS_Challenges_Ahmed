var prompt = require('prompt-sync')();

var a = +prompt('Entrer a : ');
var b = +prompt('Entrer b : ');
var c = +prompt('Entrer c : ');
if ((a + b) > c && (a + c > b) && (b + c > a)) {
    console.log('Triangle valide');
    if (a === b && b === c) {
        console.log('Le triange est Équilatéral');

    }
    else if (a === b || b === c || a === c) {
        console.log('Le triange est Isocèle');
    }
    else {
        console.log('Le triange est Scalène');
    }
}
else {
    console.log('Triangle invalide');
}


