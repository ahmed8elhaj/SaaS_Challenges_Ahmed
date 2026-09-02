var prompt = require('prompt-sync')();

var Montant = +prompt('Montant commande : ');
console.log(`Montant commande : ${Montant}`);
if (Montant < 100) {
    console.log(`Frais livraison : 30 DH`);
    let total = Montant + 30;
    console.log(`Total à payer : ${total}`);
    }
     else if  (Montant >= 100 && Montant <= 299) {
        console.log(`Frais livraison : 20 DH`);
        let total = Montant + 20;
        console.log(`Total à payer : ${total}`);
    }
    else if (Montant >= 300 && Montant <= 499) {
        console.log(`Frais livraison : 10 DH`);
        let total = Montant + 10;
        console.log(`Total à payer : ${total}`);
        
    } 
    else{
        console.log(`livraison gratuite`);
        console.log(`Total à payer : ${Montant}`);

    }


