
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Por favor, ingresa un número para la tabla de multiplicar: ', (input) => {
  const numero = parseFloat(input);

  if (isNaN(numero)) { 
    console.log("Por favor, ingresa un número válido.");
  } else {
    function generarTablaMultiplicar(numero) {
      const tabla = []; 
      
      for (let i = 1; i <= 10; i++) {
        const resultado = numero * i; 
        tabla.push(resultado); 
      }
      
      return tabla; 
    }

    const tabla = generarTablaMultiplicar(numero); 

    console.log(`Tabla de multiplicar para ${numero}:`, tabla); 
  }

  rl.close(); 
});
