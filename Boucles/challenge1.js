var prompt = require('prompt-sync')();
var nombre = +prompt(' fourni les numéros des participants : ');
console.log(`Nombre de participants : ${nombre}`);

for (let i = 1; i <= nombre; i++) {
    console.log(`Participant ${i}`);


}
