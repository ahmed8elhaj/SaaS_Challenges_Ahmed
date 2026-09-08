let ids = [2, 7, 11, 15, 23, 34, 45, 58, 61, 70];
function findNumbre(nombre) {
    let start = 0;
    let end = ids.length - 1;
    while (start <= end) {
        let middle = (start + end) >> 1;
        if (ids[middle] === nombre) {
            console.log(true, ' index : ', middle);
            return
        }
        if (ids[middle] < nombre) {
            start = middle + 1;
        }
        else {
            end = middle - 1
        }
    }
    console.log(false);
}
findNumbre(11)
