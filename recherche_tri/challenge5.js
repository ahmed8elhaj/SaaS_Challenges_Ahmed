let scores = [3, 3, 7, 7, 7, 12, 19, 19, 25, 30, 30, 30, 41];

function findFirstLast(nombre) {
    let first = -1;
    let last = -1;
    let start = 0;
    let end = scores.length - 1;
    while (start <= end) {
        let middle = (start + end) >> 1;
        if (scores[middle] === nombre) {
            first = middle;
            end = middle - 1;
        }
        else if (scores[middle] < nombre) {
            start = middle + 1;
        }
        else {
            end = middle - 1;
        }
    }
    start = 0;
    end = scores.length - 1;
    while (start <= end) {
        let middle = (start + end) >> 1;
        if (scores[middle] === nombre) {
            last = middle;
            start = middle + 1; 
        }
        else if (scores[middle] < nombre) {
            start = middle + 1;
        }
        else {
            end = middle - 1;
        }
    }
    console.log("Premier index :", first);
    console.log("Dernier index :", last);
}

findFirstLast(7);
