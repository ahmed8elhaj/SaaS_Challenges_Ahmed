var prompt = require('prompt-sync')();
var N = +prompt(' fourni un numéros pour la multiplication : ');
/*let i =0
while ( i <= 10 ) {
    let multi = i * N
    console.log(`${i} x ${N} = ${multi}`);
i++
}*/

for (let i = 0; i <= 10; i++) {
    let multi = i * N
    console.log(`${i} x ${N} = ${multi}`);
}