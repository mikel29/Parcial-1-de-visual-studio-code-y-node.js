const fs = require('fs'); // Importa el módulo para trabajar con archivos
const readline = require('readline'); // Importa el módulo para recibir entrada

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para verificar si un número es primo
function esPrimo(n) {
  if (n <= 1) return false; // No son primos
  if (n === 2) return true; // 2 es primo
  if (n % 2 === 0) return false; // Pares no son primos

  const limite = Math.sqrt(n);

  for (let i = 3; i <= limite; i += 2) {
    if (n % i === 0) {
      return false; // Tiene un divisor, no es primo
    }
  }

  return true; // No tiene divisor, es primo
}

// Pregunta al usuario por un número
rl.question('Por favor, ingresa un número para encontrar los primos menores o iguales: ', (input) => {
  const numero = parseInt(input); // Convierte la entrada a entero

  if (isNaN(numero) || numero <= 1) {
    console.log("Por favor, ingresa un número válido mayor que 1.");
  } else {
    const primos = [];

    // Encuentra todos los primos menores o iguales al número ingresado
    for (let i = 2; i <= numero; i++) {
      if (esPrimo(i)) {
        primos.push(i); // Agrega el número primo a la lista
      }
    }

    // Escribe los primos en un archivo
    const contenido = primos.join(", "); // Únelo con comas para crear el contenido
    fs.writeFileSync('primos.txt', contenido); // Escribe en un archivo llamado "primos.txt"

    console.log(`Se ha creado el archivo 'primos.txt' con los números primos menores o iguales a ${numero}.`);
  }

  rl.close(); // Cierra la interfaz de lectura
});
