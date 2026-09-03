const prompt = require("prompt-sync")();
var N = +prompt('Entrer un nomber : ');
let Diviseurs =0;

for (let i=1; i<=N; i++) {
    if(N%i===0){
        console.log(i);
        Diviseurs = Diviseurs+1
    }
    
}
console.log(` Nombre de Diviseurs est : ${Diviseurs}`);
