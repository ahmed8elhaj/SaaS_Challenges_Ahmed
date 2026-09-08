let temperatures = [22, 19, 30, 15, 28, 17, 25];
let swaps = 0;

for (let i = 0; i < temperatures.length - 1; i++) {
    let max = i;
    for (let j = i + 1; j < temperatures.length; j++) {
        if (temperatures[j] > temperatures[max]) {
            max = j;
        }
    }
    if (max !== i) {
        let temp = temperatures[i];
        temperatures[i] = temperatures[max];
        temperatures[max] = temp;
        swaps++;
    }
}
console.log(temperatures);
console.log(swaps);
