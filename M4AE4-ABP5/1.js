function sumatoria(numero) {
    if (numero > 0 && numero < 100 && Number.isFinite(numero) && Number.isInteger(numero)) {
        let suma = 0;
        for (let i = 1; i <= numero; i++) {
            suma += i;
        }
        return suma;
    } else {
        return "Número inválido, debe ser un número entero positivo menor a 100";
    }
}
console.log(sumatoria());