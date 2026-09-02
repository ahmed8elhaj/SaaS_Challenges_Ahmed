var prompt = require('prompt-sync')();

var n = prompt('fournit la durée du film en minutes : ');
let Duree = Number(n)
if (Duree < 60) {
    console.log(`Durée : ${Duree} \n`);
    console.log(`Catégorie : Court métrage`);

}
else if (Duree > 120) {
    console.log(`Durée: ${Duree} \n`);
    console.log(`Catégorie: Film long`);
}

else {
    console.log(`Durée: ${Duree} \n`);
    console.log(`Catégorie: Film standard`);
}






process.exit(0);