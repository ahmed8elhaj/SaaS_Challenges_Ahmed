function calculerSomme(array) {
    let somme = 0;
    for (let ary of array) {
        somme += ary;
    }
    return somme

}
const tab = [10, 20, 30, 40, 50];


console.log(calculerSomme(tab));
