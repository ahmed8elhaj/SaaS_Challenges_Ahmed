const readline = require('readline');
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

read.question('Entrer la capacité exprimée en Gigaoctets (GB) :\n', (GB) => {
    let MB = 1024 * GB

console.log(`la capacité exprimée en Gigaoctets (GB) ${GB} est : ${MB} (MB)`);
process.exit(0);
})