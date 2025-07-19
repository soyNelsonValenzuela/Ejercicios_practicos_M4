# 🛒 Explicación del ejercicio **M4AE1-ABPRO1**

Este archivo forma parte del ejercicio **M4AE1-ABPRO1 "Introduccion al lenguaje JavaScript"** del Módulo 4: *Fundamentos de programación en JavaScript*, del bootcamp **"Desarrollo de Aplicaciones Front End Trainee"** impartido por UNAB y Talento Digital para Chile.

El script simula la lógica básica de un carrito de compras, implementando conceptos fundamentales del lenguaje JavaScript.

---

## 🧠 Conceptos utilizados

En el desarrollo del código se aplican las siguientes herramientas del lenguaje:

- **`let` y `const`**: para declarar variables con diferentes alcances y niveles de mutabilidad.
- **`if-else`**: para aplicar lógica condicional y tomar decisiones en base al estado del carrito.
- **`console.log()`**: para imprimir mensajes informativos en la consola.
- **Template strings**: para componer salidas dinámicas usando interpolación de variables.
- **Operadores aritméticos** (`+`, `*`): para calcular totales.
- **Operadores de comparación** (`===`):para validar condiciones.
- **Operadores de asignación** (`+=`, `=`):para asignar valores a variables. 
- **Tipos primitivos** como `string`, `boolean` y `number`.
- **Comentarios en línea**: para mejorar la legibilidad del código y describir partes clave de la lógica.

---

## 📋 Descripción funcional

El código establece nombres, precios y cantidades de productos, determina si poseen el estado de "seleccionado" mediante el uso de un valor booleano, luego calcula el valor neto de la compra,calcula el IVA y calcula el total de una compra considerando el precio de despacho. El programa comunica todos estos datos usando `console.log`.

---

## 🚀 Cómo ejecutar

Para probar este archivo en tu entorno local con Node.js, ejecuta:

```bash
node cart.js
```

O con `nodemon` si lo tienes instalado:

```bash
nodemon cart.js
```

---

> *Este ejercicio refuerza la comprensión del flujo condicional, la declaración de variables y el uso de operadores en JavaScript.*