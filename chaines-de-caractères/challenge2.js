
let count = 0;
function compterLettre(chaine, lettre) {

    chaine = chaine.toLowerCase();
    count = chaine.split(lettre).length -1;
    return count

}
console.log(compterLettre('JavaScript', 'a'));
