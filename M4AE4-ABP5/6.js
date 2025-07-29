const numeros = [45, 3, 22, 7, 19, 8, 12, 5, 30, 1];
const ordenarAscendente = (arr) => {
  if (!Array.isArray(arr)) {
    return "Entrada inválida. Debe ser un arreglo.";
  }
  return arr.sort((a, b) => a - b);
}
const ordenado = ordenarAscendente(numeros);
console.log("Arreglo ordenado:", ordenado);