
let totalNeto = 0;
let seguirComprando = true;

const precioProducto1 = 12000;
const precioProducto2 = 18000;
const precioProducto3 = 25000;

do {
  let opcion = prompt(
    `Elige un producto:\n` +
    `1. Polera - $${precioProducto1}\n` +
    `2. Pantalón - $${precioProducto2}\n` +
    `3. Chaqueta - $${precioProducto3}\n` +
    `4. Terminar compra`
  );

  if (opcion === "1") {
    let cantidad = parseInt(prompt("¿Cuántas poleras deseas agregar?"));
    if (!isNaN(cantidad) && cantidad > 0) {
      totalNeto += cantidad * precioProducto1;
      console.log(`Agregaste ${cantidad} polera(s) a $${precioProducto1} cada una. Total Neto: $${totalNeto}`);
    } else {
      alert("Cantidad inválida.");
    }
  } else if (opcion === "2") {
    let cantidad = parseInt(prompt("¿Cuántos pantalones deseas agregar?"));
    if (!isNaN(cantidad) && cantidad > 0) {
      totalNeto += cantidad * precioProducto2;
        console.log(`Agregaste ${cantidad} pantalón(es) a $${precioProducto2} cada uno . Total Neto: $${totalNeto}`);
    } else {
      alert("Cantidad inválida.");
    }
  } else if (opcion === "3") {
    let cantidad = parseInt(prompt("¿Cuántas chaquetas deseas agregar?"));
    if (!isNaN(cantidad) && cantidad > 0) {
      totalNeto += cantidad * precioProducto3;
        console.log(`Agregaste ${cantidad} chaqueta(s) a $${precioProducto3} cada una. Total Neto: $${totalNeto}`);
    } else {
      alert("Cantidad inválida.");
    }
  } else if (opcion === "4") {
    seguirComprando = false;
  } else {
    alert("Opción no válida. Intenta nuevamente.");
  }
} while (seguirComprando);

let iva = totalNeto * 0.19;
let despacho = totalNeto == 0 || totalNeto > 50000 ? 0 : 3000;
let totalFinal = totalNeto + iva + despacho;

console.log(`🧾 Resumen de la compra:
- Total Neto: $${totalNeto}
- IVA (19%): $${iva}
- Despacho: $${despacho}
- Total a pagar: $${totalFinal}`);