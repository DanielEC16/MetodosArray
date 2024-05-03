# Resumen de Métodos de Array en JavaScript

En JavaScript, los métodos de array son funciones integradas que nos permiten manipular y trabajar con arrays de manera eficiente. A continuación, se presenta un resumen de algunos métodos de array comunes:

## Arreglo de Objetos

  ```javascript
  const personas = [
  {
    id: 1,
    nombre: "Juan",
    edad: 30,
    personalidad:['Estudioso','Audaz','Gloton','Inteligente']
  },
  {
    id: 2,
    nombre: "María",
    edad: 35,
    personalidad:['Enojon','Jugeton']
  },
  {
    id: 3,
    nombre: "Carlos",
    edad: 40,
    personalidad:['Divertido','Gloton']
  },
  {
    id: 4,
    nombre: "Ana",
    edad: 35,
    personalidad:['Feliz','Divertido','Gloton','Audaz']
  },
  {
    id: 5,
    nombre: "Pedro",
    edad: 28,
    personalidad:['Enojon','Divertido','Coqueto']
  },
];
  

## 1. map()
- **Descripción**: Crea un nuevo array con los resultados de llamar a una función proporcionada en cada elemento del array.
- **Ejemplo de uso**:
    ```javascript
    const age = personas.map((persona) => persona.edad);
    console.log(age);

## 2. filter()
- **Descripción**: Crea un nuevo array con todos los elementos que pasan la prueba implementada por la función proporcionada.
- **Ejemplo de uso**:
  ```javascript
  const personEnojadas = personas.filter((persona) => persona.personalidad.includes('Enojon'));
  console.log(personEnojadas);

## 3. find()
- **Descripción**: Devuelve el primer elemento en el array que cumple con la función de prueba proporcionada.
- **Ejemplo de uso**:
  ```javascript
  const personAge = personas.find((persona) => persona.edad === 35);
  console.log(personAge);

## 4. some()
- **Descripción**: Comprueba si al menos un elemento del array cumple con la función de prueba proporcionada.
- **Ejemplo de uso**:
  ```javascript
  const menorDe25 = personas.some((persona) => persona.edad < 25);
  console.log(menorDe25);

## 5. every()
- **Descripción**: Comprueba si todos los elementos del array cumplen con la función de prueba proporcionada.
- **Ejemplo de uso**:
  ```javascript
  const todasMayoresDe18 = personas.every((persona) => persona.edad >= 18);
  console.log(todasMayoresDe18);