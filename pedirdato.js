const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('¿Cuál es tu nombre? ', (answer) => {
  console.log(`Hola, ${answer}!`);
  rl.close();
});