var prompt = require('prompt-sync')();
let N = +prompt("Entrer le nombre d'article vous achetez : ");
let prix = N * 125;
let remise = 0;
if (N <= 0) {
    prix = 0;
}
else if (N === 1) {
    console.log("Prix des articles : 125 DH");
}
else {
    for (let i = 2; i <= N; i++) {
        remise = (i - 1) * 0.02;
        if (remise > 1) {
            remise = 1;
        }
        prix = (N * 125) - ((N * 125) * remise);
    }
    console.log(`Remise : ${remise}%`);
    console.log(`Prix des articles : ${prix} DH`);
}
