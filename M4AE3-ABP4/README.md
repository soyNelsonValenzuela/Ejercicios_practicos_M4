# 📘 M4AE2 -ABP4 Actividad de Práctica con Arreglos y Funciones

Este proyecto contiene cinco ejercicios prácticos de JavaScript enfocados en el uso de **arreglos, funciones, condicionales y bucles**, como parte del módulo 4 del bootcamp.

---

## 🎯 Aprendizajes Esperados

> Aplicar estructuras de control de flujo, manejo de arreglos y funciones básicas en JavaScript para resolver problemas concretos de lógica y procesamiento de datos.

---

## 📝 Ejercicios Incluidos

### 1. Generar arreglo con múltiplos de 2
Función que genera un arreglo de largo `n`, donde el primer valor es 1 y cada elemento siguiente es el doble del anterior.

```javascript
function generarArregloDobles(n) {
  let resultado = [];
  let valor = 1;
  for (let i = 0; i < n; i++) {
    resultado.push(valor);
    valor *= 2;
  }
  return resultado;
}
```

### 2. Buscar el mayor número en un arreglo de largo 10
Función que recorre un arreglo de 10 elementos y retorna el número más grande.

```javascript
function buscarMayor(arr) {
  let mayor = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > mayor) {
      mayor = arr[i];
    }
  }
  return mayor;
}
```

### 3. Obtener día de la semana según número
Función que, dado un número del 1 al 7, devuelve el día correspondiente de la semana.

```javascript
function obtenerDia(numero) {
  const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  if (numero >= 1 && numero <= 7) {
    return diasSemana[numero - 1];
  } else {
    return "Número inválido. Debe estar entre 1 y 7.";
  }
}
```

### 4. Buscar elemento en un arreglo de números (máximo 100)
Función que verifica si un número se encuentra dentro de un arreglo (de hasta 100 elementos) e indica su posición.

```javascript
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
```

### 5. Ordenar un arreglo numérico ascendentemente
Función que ordena los elementos de un arreglo numérico de menor a mayor usando `.sort()`.

```javascript
function ordenarMenorAMayor(arr) {
  if (!Array.isArray(arr)) {
    return "Arreglo inválido.";
  }
  return arr.sort((a, b) => a - b);
}
```

---

---

## ▶️ Cómo ejecutar los scripts con Node.js y Nodemon

### 🔧 Requisitos previos:
- Tener instalado [Node.js](https://nodejs.org/)
- Tener instalado `nodemon` globalmente o como dependencia de desarrollo:

```bash
npm install -g nodemon
# o como dependencia de desarrollo
npm install --save-dev nodemon
```

---

### 🚀 Ejecutar con Node.js:

```bash
node nombre-del-archivo.js
```

Por ejemplo:

```bash
node 1.js
```

---

### 🔁 Ejecutar con Nodemon (ideal para pruebas rápidas):

```bash
nodemon 1.js
```

Nodemon reinicia automáticamente el script cada vez que detecta cambios en el archivo.

---
