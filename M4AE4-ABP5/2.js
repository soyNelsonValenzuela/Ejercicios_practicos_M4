function esPrimo(numero) {
    let esPrimo = true;
    if (!Number.isInteger(numero) || numero <= 1) {
        console.log("El número debe ser un entero mayor que 1.");
        return;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        console.log(`${numero} es un número primo.`);
    } else {
        console.log(`${numero} NO es un número primo.`);
    }
}
esPrimo(37); 
esPrimo(18); 
esPrimo(1);