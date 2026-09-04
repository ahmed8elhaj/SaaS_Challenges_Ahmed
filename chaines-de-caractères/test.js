var prompt = require('prompt-sync')();
var montant = +prompt('montant : ');
var taux = +prompt('taux : ');

 
function formatterMad(val){
    val = val + " DH"
    return val
}
 function convertirMontant(montant,taux,formatter){
   let result=0; 
   result = montant*taux
    console.log(result);
    return formatter(result)
    
    

 }
 console.log(convertirMontant(100,10.5,formatterMad));
 