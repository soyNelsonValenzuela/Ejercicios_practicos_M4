function obtenerDia(numero) {
  const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  if (numero >= 1 && numero <= 7) {
    return diasSemana[numero - 1];
  } else {
    return "Número inválido. Debe estar entre 1 y 7.";
  }
}
// Ejemplo de uso
console.log(obtenerDia(5)); // "Miércoles"