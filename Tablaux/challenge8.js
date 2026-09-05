const arry = [1, 2, 2, 2, 3, 66, 5, 88, 9, 9, 999, 4, 7, 44, 777, 777, 5, 5, 5];
let newArry = [];

function supprimerDoublons() {
    for (let i = 0; i < arry.length; i++) {
        let taill = false;

        for (let j = 0; j < newArry.length; j++) {

            if (arry[i] === newArry[j]) {
                taill = true;
                break;
            }
        }
        if (taill === false) {
            newArry[newArry.length] = arry[i];
        }
    }
    return newArry
}

console.log(supprimerDoublons());
