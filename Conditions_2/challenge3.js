var prompt = require('prompt-sync')();

var Montant = +prompt('Montant commande : ');
console.log(`Montant commande : ${Montant}`);
if (Montant < 500) {
    console.log(`aucune réduction`);
    let total = Montant;
    console.log(`Total à payer : ${total}`);
    }
     else if  (Montant >= 500 && Montant <= 999) {
        console.log(`Réduction 5%`);
        let total = Montant - Montant*0.5;
        console.log(`Total à payer : ${total}`);
    }
    else if (Montant >= 1000 && Montant <= 1999) {
        console.log(`Réduction 10%`);
        let total = Montant -Montant*0.1;
        console.log(`Total à payer : ${total}`);
        
    } 
    else{
        console.log(`Réduction 15%`);
        let total = Montant -Montant*0.15;
        console.log(`Total à payer : ${total}`);

    }


