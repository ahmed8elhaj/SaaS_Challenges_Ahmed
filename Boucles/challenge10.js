const prompt = require("prompt-sync")();

let count = 0;
let somme = 0;
let N;

do {
    N = +prompt("Saisie : ");

    if (N !== 0) {
        count++;
        somme += N;
    }

} while (N !== 0);

console.log(`Nombre de valeurs : ${count}`);
console.log(`Somme : ${somme}`);
