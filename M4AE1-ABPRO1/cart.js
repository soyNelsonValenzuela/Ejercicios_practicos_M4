// crear variable globales de productos , esta bien desde 3
const producto1= 'Audifono PS5';
const precio1 = 150;
const producto2= 'F1 a escala del McDonalds';
const precio2 = 50;
const producto3= 'Cheeto con cara de jesus';
const precio3 = 100;

//crear variables que pueden cambiar
let seleccion1= true;
let seleccion2= true;
let seleccion3= true;
let cantidad1= 1;
let cantidad2= 1;
let cantidad3= 1;

let despacho = 10;

//total
let total = 0;

//if-else para sacar valores 
if (seleccion1 === true) {
    total += precio1 * cantidad1;
    console.log(`Seleccionaste ${cantidad1} ${producto1} a $${precio1} cada uno.`);
} else {
    console.log('No seleccionaste el producto 1');
}
if (seleccion2 === true) {
    total += precio2 * cantidad2;
    console.log(`Seleccionaste ${cantidad2} ${producto2} a $${precio2} cada uno.`);
} else {
    console.log('No seleccionaste el producto 2');
}
if (seleccion3 === true) {
    total += precio3 * cantidad3;
    console.log(`Seleccionaste ${cantidad3} ${producto3} a $${precio3} cada uno.`);
} else {
    console.log('No seleccionaste el producto 3');
}
const iva = total * 0.19;
const totalFinal = total + iva + despacho;
console.log(`Valor neto $${total}`);
console.log(`IVA (19%)$${iva}`);
console.log(`Despacho: $${despacho}`);
console.log(`TOTAL FINAL $${totalFinal}`);