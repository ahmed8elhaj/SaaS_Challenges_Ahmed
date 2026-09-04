function compterLettre(chaine, lettre) {

    let count = 0;
    for (let char of chaine) {
        if (char === lettre) {
            count++;
        }
    }
    return count;
}
console.log(compterLettre('JavaScript', 'a'));
