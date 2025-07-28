const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function buscarMayor(arr) {
  let mayor = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > mayor) {
      mayor = arr[i];
    }
  }
  return mayor;
}
// Ejemplo de uso
console.log(buscarMayor(numeros));