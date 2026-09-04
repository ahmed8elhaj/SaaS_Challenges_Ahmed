var prompt = require('prompt-sync')();

function nettoyerEspaces(texte) {
    texte = texte.trimStart();
    texte = texte.trimEnd();
    return texte
}
function mettreEnMajuscule(texte) {
    texte = texte.toUpperCase();
    return texte
}
function ajouterPrefixe(texte, prefixe = "LOG:") {
    texte = prefixe + " " + texte;
    return texte
}
function traiterMessage(texte, ...transformations) {
    
    let resultat = texte;
    for (const i of transformations) {
        resultat = i(resultat);
    }
    return resultat;
}
let texte = prompt("Entrer le message : ");
let resultat = traiterMessage(texte, nettoyerEspaces, mettreEnMajuscule, ajouterPrefixe);

console.log(resultat);



