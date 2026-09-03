
var prompt = require('prompt-sync')();
let nom = prompt("Entrer le nom : ");
let prenom = prompt("Entrer le prenom : ");

nom = nom.toLowerCase();
prenom = prenom.toLowerCase();



function genererEmail(nom, prenom) {
    let Email = nom + prenom + "@entreprise.com";
    return Email;

}
console.log(`Votre Email est : ${genererEmail(nom, prenom)}`);
