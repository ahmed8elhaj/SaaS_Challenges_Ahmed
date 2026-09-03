var prompt = require('prompt-sync')();
var motDePasse = prompt("Entrer Password : ");

function verifierMotDePasse(motDePasse) {
    let passLenght = motDePasse.length;

    if (passLenght >= 8) {
        let test = motDePasse.includes("@");
        if (test === true) {
            console.log(true);
        }
        else {
            console.log("false");
        }
    }
    else {
        console.log("false");

    }

}

verifierMotDePasse(motDePasse)




