var prompt = require('prompt-sync')();
var ageHumain = +prompt("Entrer l'age humain : ");

console.log(calculerAgeChien(ageHumain));

function calculerAgeChien(ageHumain, ageChien) {

    ageChien = ageHumain / 7
    return ageChien;

}
