const sumatoriaPares = (n)=>{
  if (Number.isInteger(n) && n > 10 && n < 1000) {
    let suma = 0;
    for (let i = 2; i <= n; i += 2) {
      suma += i;
    }
    return suma;
  } else {
    return "Número inválido. Debe ser un entero mayor que 10 y menor que 1000.";
  }
}
console.log(sumatoriaPares(20));
console.log(sumatoriaPares(100));
console.log(sumatoriaPares(5)); 