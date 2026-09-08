let nombres = [4, 8, 15, 16, 23, 42];

function rechercheNombre(nombre) {
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] === nombre) {
            console.log(true,'index :', i);
            return;
        }
    }

    console.log(false);
}

rechercheNombre(42);
