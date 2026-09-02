var prompt = require('prompt-sync')();

console.log('1-Rouge');
console.log('2-orange');
console.log('3-vert');
var color = +prompt('Entrer le nombre the colour vous voullez choiser :');

switch (color) {
    case 1:
        console.log('Arrêtez-vous');
        break;
    case 2:
        console.log('Ralentissez');
        break;
    case 3:
        console.log('Vous pouvez passer');
        break;
    default:
        console.log('Couleur invalide');
        
        break;
}