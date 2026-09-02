var prompt = require('prompt-sync')();
var X = +prompt(' fourni un numéros pour la multiplication : ');
var N = +prompt(' La nomber de multiplication : ');

for (let i = 0; i <= N; i++) {
    let multi = i * X
    console.log(`${i} x ${X} = ${multi}`);
}