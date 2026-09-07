var prompt = require("prompt-sync")();
var X = prompt("Entrer : ");
let products = [
    {
        id: 1,
        name: "Laptop",
        category: "Informatique",
        price: 7500
    },
    {
        id: 2,
        name: "Phone",
        category: "Smartphone",
        price: 3500
    },
    {
        id: 3,
        name: "Keyboard",
        category: "Informatique",
        price: 500
    },
    {
        id: 4,
        name: "Monitor",
        category: "Informatique",
        price: 2200
    }
];
function rechercherParId(X) {
    let idProduct = products.find(index => index.id == X);
    return idProduct

}
function rechercherParNom(X) {
    let nameProduct = products.find(index => index.name == X);
    return nameProduct

}
function rechercherParCategorie(X) {
    let categoryProduct = products.find(index => index.category == X);
    return categoryProduct

}
function rechercherParPrix(X) {
    X = Number(X);
    let resultat = null;

    for (priceProduct of products) {
        if (priceProduct.price <= X) {
            if (resultat === null || priceProduct.price > resultat.price) {
                resultat = priceProduct;
            }
        }
    }

    return resultat;
}

function findTheProduct(X, ...functions) {
    for (i of functions) {
        let resultat = i(X)
        if (resultat) {
            console.log(resultat);
            return resultat
        }
    }
    console.log('not found');
    return



}

findTheProduct(X, rechercherParId, rechercherParNom, rechercherParCategorie, rechercherParPrix);