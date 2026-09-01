var prompt = require('prompt-sync')();
let n1 = prompt('La tension U en volts  : ');
let U = Number(n1);
let n2 = prompt(" l'intensité I en ampères : ");
let I = Number(n2);
let n3 = prompt('Le temps t en heures : ');
let t = Number(n3);
let Energie = U * I * t


console.log(`Note finale ${U} v`);
console.log(`Note finale ${I} A`);
console.log(`Note finale ${t} heures`);
console.log(`Note finale ${Energie} Wh`);

