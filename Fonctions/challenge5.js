function additionnerTout(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
        total += arg;
    }
    return total;

}
console.log(additionnerTout(1, 2, 3, 4));