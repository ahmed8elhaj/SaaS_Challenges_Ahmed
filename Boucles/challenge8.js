var prompt = require('prompt-sync')();
var N = +prompt(' Combien de mission allez-vous souhaite réaliser :  ');
let i = 0;
console.log(`Nombre de missions : ${N}`);

while (i <= N) {
    Score=i*100;
    console.log(`Mission ${i} → Score : ${Score}`);
    i++
    
}