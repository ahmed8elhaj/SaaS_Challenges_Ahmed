let date = new Date();

function obtenirHeureActuelle() {
    hour = date.getHours();
    minutes = date.getMinutes();
    secondes = date.getSeconds();
    return `${hour}:${minutes}:${secondes}`;

}


console.log(obtenirHeureActuelle());
