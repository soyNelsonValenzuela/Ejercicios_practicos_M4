// Problema 1
let numero = 5; 
let mensaje = "";
if (typeof numero == 'number' && !isNaN(numero)) {
    if (numero >= 1 && numero <= 100 && Number.isInteger(numero)) {
        mensaje = ((numero > 5 && numero < 15) || numero === 70 || numero === 55)
            ? `El número ingresado tiene opciones de ganar`
            : `El número ingresado no es favorable`;
    } else {
        mensaje = `El número ingresado está fuera de rango. Debe ser un entero entre 1 y 100`;
    }
} else {
    mensaje = `El valor ingresado (${numero}) no es un número válido`;
}
console.log(mensaje);