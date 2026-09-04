

function creerCompteur(valeurInitiale = 0) {

    return function incremant() {
        valeurInitiale = valeurInitiale + 1;
        return valeurInitiale
    }
    incremant();

}


let MonCompteur = creerCompteur(5);

console.log(MonCompteur());
console.log(MonCompteur());
console.log(MonCompteur());


