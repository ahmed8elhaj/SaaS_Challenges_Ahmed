let arry = [10, 8, 96, 77, 1, 52, 87];
function filtrerPairs(tab) {
    let newArry = [];
    let j = 0;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] % 2 === 0) {
            newArry[j] = tab[i];
            j++;
        }
    }
    return newArry
}
console.log(filtrerPairs(arry));




