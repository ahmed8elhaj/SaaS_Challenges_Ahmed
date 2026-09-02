var prompt = require('prompt-sync')();

var Ax = +prompt('Position Ax : ');
var Ay = +prompt('Position Ay : ');
var Az = +prompt('Position Az : ');
var Bx = +prompt('Position Bx : ');
var By = +prompt('Position By : ');
var Bz = +prompt('Position Bz : ');

let Dx = (Ax + Bx) * (Ax + Bx);
let Dy = (Ay + By) * (Ay + By);

let Dz = (Az + Bz) * (Az + Bz);

let Distance = (Dx + Dy + Dz) ** 0.5
console.log(`Position A : (${Ax},${Ay},${Az})`);
console.log(`Position A : (${Bx},${By},${Bz})`);
console.log(`Distance : ${Distance}`);





process.exit(0);