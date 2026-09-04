var prompt = require('prompt-sync')();
let montant = +prompt("Entrer le montant : ");
let taux = +prompt("Entrer le taux : ");

let resultat = convertirMontant(montant, taux, formatMAD);
console.log(resultat);


function formatMAD(val) {
    val = val + " DH";
    return val
}

function convertirMontant(montant, taux, formatMAD) {
    let multiplier = montant * taux;
    return formatMAD(multiplier)
}


