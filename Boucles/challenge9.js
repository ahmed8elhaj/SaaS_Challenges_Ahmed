const prompt = require("prompt-sync")();
const base = Number(prompt("Base : "));
const exposant = Number(prompt("Exposant : "));

let resultat = 1;
let i = 0;
let expression = "";
while (i < exposant) {
    resultat *= base;
    expression += base;

    if (i < exposant - 1) {
        expression += " × ";
    }
    i++;
}
console.log(expression + " = " + resultat);
