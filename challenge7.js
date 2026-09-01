var prompt = require('prompt-sync')();
let n1 = prompt('Contrôle continu  : ');
let noteCC = Number(n1);
let n2 = prompt('Projet : ');
let noteProjet = Number(n2);
let n3 = prompt('Examen final : ');
let noteExamen = Number(n3);
let Note_finale = (noteCC * 2 + noteProjet * 3 + noteExamen * 5) / 10

console.log(`\n`);
console.log(`Note finale ${Note_finale}`);
