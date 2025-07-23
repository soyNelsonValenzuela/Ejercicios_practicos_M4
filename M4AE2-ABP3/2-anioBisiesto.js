//Problema 2
let anio = NaN;
let mensaje = "";
if (anio >= 0 && Number.isInteger(anio) && typeof anio === 'number') {
  ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0) ?
    mensaje = `El año ${anio} es bisiesto`
    : mensaje = `El año ${anio} NO es bisiesto`)
} else {
  mensaje = `No se puede procesar el año ingresado: ${anio}.\nDebe ser un número entero positivo mayor o igual a cero`;
};
console.log(mensaje);