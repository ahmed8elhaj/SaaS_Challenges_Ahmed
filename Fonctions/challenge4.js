var prompt = require('prompt-sync')();
let nom = prompt("Entrer le nom : ");
let titre = prompt("Entrer le titre : ");

function saluerClient(nom, titre) {
    if (titre !== "") {
        console.log(`Bonjour ${titre} ${nom}`);
    }
    else {
        console.log(`Bonjour Client ${nom}`);
    }
    return
}
saluerClient(nom, titre);
