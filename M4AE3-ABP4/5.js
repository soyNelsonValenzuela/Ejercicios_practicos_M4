const numeros = [34, 7, 23, 32, 5, 62];
function ordenarMenorAMayor(arr) {
  if (!Array.isArray(arr)) {
    return "Arreglo inválido.";
  }
  return arr.sort((a, b) => a - b);
}
console.log(ordenarMenorAMayor(numeros));