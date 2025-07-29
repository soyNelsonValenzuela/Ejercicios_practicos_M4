const tablaMultiplicar = (n) => {
  if (!Number.isFinite(n)) {
    console.log("Entrada inválida. Debe ser un número.");
    return;
  }

  console.log(`Tabla de multiplicar del ${n}:`);
  for (let i = 1; i <= 12; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
tablaMultiplicar(5);
tablaMultiplicar("a"); // Entrada inválida. Debe ser un número.
