//Problema 3
let gameA = 1;
let gameB = 8;
let mensaje = 
  (gameA < 0 || gameB < 0 || gameA > 7 || gameB > 7) ? "Resultado inválido" :
  (gameA === 7 && gameB < 5 || gameB === 7 && gameA < 5) ? "Resultado inválido" :
  ((gameA === 7 || gameB === 7) && Math.abs(gameA - gameB) > 2) ? "Resultado inválido" :
  ((gameA === 6 && gameB > 4 && gameB !== 6) || (gameB === 6 && gameA > 4 && gameA !== 6)) ? "Resultado inválido" :
  ((gameA === 6 && gameB <= 4) || (gameA === 7 && (gameB === 5 || gameB === 6))) ? `Jugador A ganó el set` :
  ((gameB === 6 && gameA <= 4) || (gameB === 7 && (gameA === 5 || gameA === 6))) ? `Jugador B ganó el set` :
  "El set todavía no termina";
console.log(mensaje);