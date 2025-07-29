function cuentaRegresiva(n) {
  if (Number.isInteger(n) && n > 0 && n < 100) {
    for (let i = n; i >= 1; i--) {
      console.log(i);
    }
  } else {
    console.log("Número inválido. Debe ser un entero mayor que 0 y menor que 100.");
  }
}
cuentaRegresiva(10);