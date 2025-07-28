const numeros = [10, 22, 35, 47, 59, 60];
function buscarElemento(arr, numeroBuscado) {
  if (!Array.isArray(arr) || arr.length > 100) {
    return "Arreglo inválido o demasiado largo.";
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === numeroBuscado) {
      return `Elemento encontrado en la posición ${i}`;
    }
  }
  return "Elemento no encontrado.";
}
console.log(buscarElemento(numeros, 60)); // Elemento encontrado en la posición 3
console.log(buscarElemento(numeros, 99)); // Elemento no encontrado.