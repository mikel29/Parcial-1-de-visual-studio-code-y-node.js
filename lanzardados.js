const readline = require('readline'); // Importa el módulo para recibir entrada del usuario

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * 
 * @returns {number} 
 */
function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1; 
}

/**
 * 
 * @param {number} numDados - 
 * @returns {number[]} 
 */
function lanzarVariosDados(numDados) {
  const resultados = [];

  for (let i = 0; i < numDados; i++) {
    resultados.push(lanzarDado()); // 
  }

  return resultados;
}

rl.question('¿Cuántos dados quieres lanzar? ', (input) => {
  const numDados = parseInt(input); 

  if (isNaN(numDados) || numDados <= 0) {
    console.log("Por favor, ingresa un número válido de dados (mayor que 0).");
  } else {
    const resultados = lanzarVariosDados(numDados); 

    console.log(`Lanzaste ${numDados} dado(s). Los resultados fueron: ${resultados.join(", ")}.`); 
  }

  rl.close();