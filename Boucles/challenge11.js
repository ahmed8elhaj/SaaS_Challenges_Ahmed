const prompt = require("prompt-sync")();
var N = +prompt('Entrer un nomber : ');
let resultat = 1;
for (let i =N; i >= 1; i--) {
    resultat = resultat * i;
}
console.log(resultat);
