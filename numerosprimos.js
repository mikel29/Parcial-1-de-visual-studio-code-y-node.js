const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Pregunta al usuario por un número
rl.question('Por favor, ingresa un número para saber si es primo o no: ', (input) => {
  const numero = parseFloat(input); // Convierte la entrada a número
  
  if (isNaN(numero)) {
    console.log("Por favor, ingresa un número válido.");
  } else {
    // Función para determinar si un número es primo
    function esPrimo(numero) {
      if (numero <= 1) {
        return false; // Los números menores o iguales a 1 no son primos
      }

      if (numero === 2) {
        return true; // 2 es el único número par primo
      }

      if (numero % 2 === 0) {
        return false; // Los números pares (excepto 2) no son primos
      }

      // Verificamos divisibilidad solo hasta la raíz cuadrada del número
      const limite = Math.sqrt(numero);

      for (let i = 3; i <= limite; i += 2) {
        if (numero % i === 0) {
          return false; // Si se encuentra un divisor, no es primo
        }
      }

      return true; // Si no se encuentra divisor, es primo
    }

    // Uso de la función para verificar si el número es primo
    if (esPrimo(numero)) {
      console.log(`${numero} es primo.`);
    } else {
      console.log(`${numero} no es primo.`);
    }
  }

  rl.close(); // Cierra la interfaz de lectura
});
