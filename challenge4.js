const readline = require('readline');
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
read.question('Entrer La distance parcourue en kilomètres (KM) \n', (KM) => {
    read.question('Entrer La quantité de carburant consommée en litres \n', (Litres) => {
        let Consommation = (Litres / KM) * 100;
        console.log(`Distance ${KM} \n `);
        console.log(`Carburant ${Litres}  \n`);
        console.log(`Votre Consommation est : ${Consommation} L/KM \n `);

        process.exit(0);
    })

})






