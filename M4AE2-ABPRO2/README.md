# 🛒 M4AE2-ABPRO2 - Carrito de Compras con Menú Interactivo (sin arreglos)

Este proyecto consiste en una simulación de un carrito de compras interactivo utilizando JavaScript puro. El usuario puede seleccionar productos mediante un menú desplegado con `prompt()`, y el programa calcula el total de la compra aplicando IVA y cargos de despacho, si corresponde.

## 🎯 Aprendizaje Esperado

> Utilizar variables simples, estructuras de repetición y sentencias condicionales para controlar el flujo de un algoritmo que resuelve un problema concreto, en el contexto del lenguaje JavaScript.

## 📚 Requisitos del ejercicio

- Utilizar bucles, condicionales `if-else` y variables globales/locales.
- No se permite el uso de **arreglos ni objetos**.
- Mostrar menú de productos de forma interactiva y repetitiva.
- Calcular el total neto, el IVA (19%), el costo de despacho y el total final.
- Mostrar un resumen usando `console.log()` con `template literals`.

---

## 🛠️ Tecnologías Utilizadas

- JavaScript
- `prompt()` para entrada de datos
- `console.log()` para salida de resultados
- Estructuras de control: `do-while`, `if-else`
- Variables globales y locales

---

## 🧾 Productos Disponibles

1. **Polera**: $12.000  
2. **Pantalón**: $18.000  
3. **Chaqueta**: $25.000  

---

## 🧮 Lógica de Cálculo

- **Total Neto**: suma de productos seleccionados.
- **IVA**: 19% sobre el total neto.
- **Despacho**:  
  - **$0** si el total neto es mayor a $50.000 o igual a $0.  
  - **$3.000** en caso contrario.
- **Total Final** = Total Neto + IVA + Despacho.

---

## 🧪 Ejecución

Puedes ejecutar este programa colnando este repositorio y ejecutar el index.html en tu navegador.

---

## 📋 Resultado Final

El programa imprime por consola el siguiente resumen al finalizar:

```
🧾 Resumen de la compra:
- Total Neto: $[monto]
- IVA (19%): $[monto]
- Despacho: $[monto]
- Total a pagar: $[monto]
```

---

> *Este ejercicio refuerza la comprensión de bucles de codigo, flujo condicional, la declaración de variables, el uso de operadores, operador ternario y template literals en JavaScript.*

---
