var prompt = require('prompt-sync')();
var N = +prompt(' fourni un numéros pour la somme : ');
let somme = 0
let expression = ""
for (let i = 0; i <= N; i++) {
    somme += i
    expression += i;
    if (i < N) {
        expression += " + ";
    }

}
console.log(`la resultat de ${expression} = ${somme}`);
