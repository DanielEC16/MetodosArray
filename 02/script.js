// Arreglo de Objetos
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

// Método map(): Crea un nuevo array con los nombres de las personas
const age = personas.map((persona) => persona.edad);
console.log(age);


// Método filter(): Crear un nuevo array con personas mayores de 30 años
const personEnojadas = personas.filter((persona) => persona.personalidad.includes('Enojon'));
console.log(personEnojadas);

// Método find(): Encontrara a la persona con edad igual a 35, y si ay mas de 1 persona con edad igual a 35 escogera solo a la primera
const personAge = personas.find((persona) => persona.edad === 35);
console.log(personAge);

// Método some(): Comprobar si hay al menos una persona menor de 25 años
const menorDe25 = personas.some((persona) => persona.edad < 25);
console.log(menorDe25);

// Método every(): Comprobar si todas las personas tienen al menos 18 años
const todasMayoresDe18 = personas.every((persona) => persona.edad >= 18);
console.log(todasMayoresDe18);
