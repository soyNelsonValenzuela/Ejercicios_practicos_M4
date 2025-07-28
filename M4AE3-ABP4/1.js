function generarArregloDobles(n) {
  let resultado = [];
  let valor = 1;
  for (let i = 0; i < n; i++) {
    resultado.push(valor);
    valor *= 2; // El siguiente será el doble del anterior
  }
  return resultado;
}

// Ejemplo de uso
console.log(generarArregloDobles(10));