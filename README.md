# Actividad 4 - Introducción a React
Alumno: Mendoza Lucero Hasiel Isai
Aplicación básica de gestión de tareas desarrollada con React + Vite y desplegada en GitHub Pages.

---

## Cuestionario

### a) ¿Qué diferencia hay entre props y state en React?
* **Props (Propiedades):** Son argumentos,parámetros que se le pasan a un componente desde su componente padre. Son de solo lectura  y sirven para transmitir información hacia abajo en el árbol de componentes.
* **State (Estado):** Es la información interna controlada y administrada directamente por el propio componente. A diferencia de las props, el estado es mutable mediante su función actualizadora, lo cual provoca un re-renderizado automático del componente para reflejar cambios en la interfaz.

### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?
Es importante porque la propiedad key le permite al algoritmo de reconciliación de React identificar de manera única cada elemento de la lista. Esto optimiza el rendimiento al renderizar solo los elementos que cambiaron, se agregaron o se eliminaron, evitando volver a dibujar la lista completa en la pantalla.

### c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.
La función `useState` es un Hook de React que le permite agregar estado local a un componente funcional. Devuelve un arreglo con dos elementos: la variable con el valor del estado actual y una función para actualizar ese valor.
* **Ejemplo de uso:** En mi aplicación la usé para manejar la lista de tareas:
  `const [tareas, setTareas] = useState([])`
  Cada vez que agrego o elimino una tarea usando `setTareas`, la interfaz se actualiza de forma automática mostrando la lista más reciente.

---

## Enlaces del proyecto
**repositorio**
https://github.com/Hasielisaimendozalucero/t3_act4_react
**pagina**
https://Hasielisaimendozalucero.github.io/t3_act4_react/
