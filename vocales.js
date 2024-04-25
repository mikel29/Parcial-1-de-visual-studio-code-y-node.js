const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Pregunta al usuario por una cadena de texto
rl.question('Ingresa una cadena de texto para contar las vocales: ', (cadena) => {
  // Función para contar las vocales
  function contarVocales(texto) {
    const vocales = 'aeiouAEIOU'; // Cadena con todas las vocales (minúsculas y mayúsculas)
    let cuenta = 0; // Contador para las vocales

    // Recorre cada carácter de la cadena y cuenta si es una vocal
    for (let i = 0; i < texto.length; i++) {
      if (vocales.includes(texto[i])) {
        cuenta++; // Si el carácter es una vocal, incrementa el contador
      }
    }

    return cuenta; // Devuelve el número total de vocales
  }

  const numeroVocales = contarVocales(cadena); // Llama a la función para contar las vocales
  console.log(`La cadena tiene ${numeroVocales} vocal(es).`); // Muestra el resultado

  rl.close(); // Cierra la interfaz de lectura
});
