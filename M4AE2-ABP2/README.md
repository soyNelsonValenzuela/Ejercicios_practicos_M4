# Proyecto: Evaluación de Variables y Sentencias Condicionales en JavaScript

Este proyecto corresponde a la actividad **"Variables, expresiones y sentencias condicionales"** del módulo M4AE2 - ABP2. Su objetivo es implementar algoritmos en JavaScript para resolver dos problemas utilizando variables, estructuras condicionales y validaciones básicas.

## 📌 Problema 1: Conversión de USD a CLP

Se implementó una función llamada `convertUsdToClp` que convierte una cantidad en dólares estadounidenses (USD) a pesos chilenos (CLP), utilizando una tasa de cambio fija de 745. La función también incluye una validación para asegurar que el valor ingresado sea un número.

### Código utilizado:

```javascript
function convertUsdToClp(usd) {
    if (typeof usd !== 'number') {
        return "El valor debe ser un número";
    } else {
        const tasaCambio = 745;
        return Math.round(usd * tasaCambio);
    }
};
console.log(convertUsdToClp(31.10));
```

### Herramientas JS utilizadas:
- Declaración de funciones
- Validación de tipos (`typeof`)
- Sentencia condicional `if`
- Operaciones matemáticas (`*`, `Math.round`)
- `console.log` para salida en consola

---

## 📌 Problema 2: Requisitos Subsidio de Arriendo

Se desarrolló una lógica que verifica si una persona cumple con los requisitos para postular al subsidio de arriendo de vivienda en Chile. Se consideran condiciones como la edad, la cédula, el ahorro en UF y el nivel de vulnerabilidad socioeconómica.

### Código utilizado:

```javascript
const edad = 18;
const tieneCedula = true;
const extranjero = true;
const ahorroUF = 4;
const titularCuenta = "postulante";
const porcentajeVulnerabilidad = 0;

let mensaje = "";
if (edad >= 18) {
    if (tieneCedula || (extranjero && tieneCedula)) {
        if (ahorroUF >= 4 &&
            ["postulante", "conyuge", "conviviente"].includes(titularCuenta)) {
            if (porcentajeVulnerabilidad >= 0 && porcentajeVulnerabilidad <= 100) {
                if (porcentajeVulnerabilidad <= 70 && porcentajeVulnerabilidad >= 0) {
                    mensaje = " Cumple con todos los requisitos para postular al subsidio de arriendo.";
                } else {
                    mensaje = " No pertenece al 70% más vulnerable según el Registro Social de Hogares.";
                }
            } else {
                mensaje = " El porcentaje de vulnerabilidad debe estar entre 0 y 100.";
            }
        } else {
            mensaje = " No acredita el ahorro mínimo de 4 UF o la cuenta no está a nombre válido.";
        }
    } else {
        mensaje = " No posee cédula de identidad vigente.";
    }
} else {
    mensaje = " Debe ser mayor de 18 años para postular.";
}
console.log(mensaje);
```

### Herramientas JS utilizadas:
- Variables primitivas (`const`, `let`)
- Arreglos con método `.includes()`
- Sentencias condicionales anidadas `if`
- Lógica booleana compuesta
- Validación de rangos numéricos

---

## ✅ Resultado

Este proyecto evidencia el uso adecuado de estructuras básicas de JavaScript para resolver problemas del mundo real aplicando lógica condicional y validaciones.

---

## 🚀 Cómo ejecutar

Para probar este archivo en tu entorno local con Node.js:

```bash
node 1-conversor.js
```

O con `nodemon` si lo tienes instalado:

```bash
nodemon 1-conversor.js
```

puedes cambiar el nombre del archivo para ejecutar `2-subsidio.js`.