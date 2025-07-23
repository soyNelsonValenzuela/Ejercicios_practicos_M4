# M4AE2 – ABP3: Variables, expresiones y sentencias condicionales

Este proyecto corresponde a la actividad **"Variables, expresiones y sentencias condicionales"** del módulo 4. El objetivo principal es aplicar estructuras básicas de control de flujo y validación de datos en JavaScript para resolver problemas simples pero concretos.

## 🎯 Aprendizaje Esperado

> Utilizar variables simples y sentencias condicionales para el control del flujo de un algoritmo que resuelve un problema simple acorde al lenguaje JavaScript.

---

## 📌 Problema 1: Juego de Azar

### ✅ Enunciado
Se recibe un número entre 1 y 100. El número tiene opciones de ganar si cumple alguna de estas condiciones:
- Es mayor que 5 y menor que 15, **o** es exactamente 70 o 55.

### 🔍 Validaciones adicionales
- El número debe ser un entero.
- Debe estar en el rango permitido (1 a 100).
- Si no es un número válido o está fuera de rango, se notifica al usuario.

### 🧠 Conceptos aplicados
- Tipos de datos
- Validación de entrada (`typeof`, `isNaN`, `Number.isInteger`)
- Operadores lógicos y ternario
- Template literals

---

## 📌 Problema 2: Año Bisiesto

### ✅ Enunciado
Determina si un año ingresado es bisiesto, considerando las siguientes reglas:
- Es divisible por 4 y no por 100, **o** es divisible por 400.

### 🔍 Validaciones adicionales
- El valor debe ser un número entero y mayor o igual a 0.
- Si no cumple, se muestra un mensaje de error.

### 🧠 Conceptos aplicados
- Módulo (`%`) para divisibilidad
- Validación con `typeof`, `Number.isInteger` y operadores lógicos
- Estructuras condicionales
- Template literals

---

## 📌 Problema 3: Set de Tenis

### ✅ Enunciado
Se simula la evaluación de un set de tenis. Dado el número de juegos ganados por el jugador A y el jugador B, se debe determinar:
- Si A ganó el set
- Si B ganó el set
- Si el set aún no termina
- Si el resultado es inválido (por ejemplo, 8-6, 7-3)

### 🔍 Reglas del set
- Un jugador gana si llega a 6 con al menos 2 de ventaja (ej: 6–2)
- Si están 5–5, se gana al llegar a 7 (7–5)
- Si están 6–6, se gana 7–6 (tiebreak)
- Otros resultados son inválidos

### 🧠 Conceptos aplicados
- Condiciones compuestas con `&&`, `||`, `Math.abs()`
- Operadores ternarios
- Template literals

---

## 🚀 Cómo ejecutar

Para probar este archivo en tu entorno local con Node.js:

```bash
node 1-juegoAzar.js
```

O con `nodemon` si lo tienes instalado:

```bash
nodemon 1-juegoAzar.js
```

puedes cambiar el nombre del archivo para ejecutar `2-anioBisiesto.js` o `3-juegoTennis.js`.

---

> *Este ejercicio refuerza la comprensión del flujo condicional, la declaración de variables, el uso de operadores, operador ternario, template literals en JavaScript.*