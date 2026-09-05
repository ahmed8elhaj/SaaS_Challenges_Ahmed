let arry = [10, 20, 30, 50];
let tab = [];

function inverserTableau() {

    for (let i = arry.length - 1, j = 0; i >= 0 && j < arry.length; i--, j++) {

        tab[j] = arry[i]

    }
    return tab
}



console.log(inverserTableau(tab));
