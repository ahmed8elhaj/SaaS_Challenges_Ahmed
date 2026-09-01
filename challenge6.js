var prompt = require('prompt-sync')();

let n1 = prompt('Score partie 1 : ');
let s1 = Number(n1);
let n2 = prompt('Score partie 2 : ');
let s2 = Number(n2);
let n3 = prompt('Score partie 3 : ');
let s3 = Number(n3);
let n4 = prompt('Score partie 4 : ');
let s4 = Number(n4);
let STotal = s1 + s2 + s3 + s4
let SMoyen = STotal / 4
console.log(`Score total ${STotal}`);
console.log(`Moyenne ${SMoyen}`);




