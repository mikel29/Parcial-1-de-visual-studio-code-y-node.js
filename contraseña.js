const readline = require('readline'); 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
  
 * @param {number} longitud 
 * @param {boolean} incluirMayusculas 
 * @param {boolean} incluirMinusculas 
 * @param {boolean} incluirNumeros 
 * @param {boolean} incluirCaracteresEspeciales 
 * @returns {string}
 */
function generarContrasena(longitud, incluirMayusculas, incluirMinusculas, incluirNumeros, incluirCaracteresEspeciales) {
  let caracteres = '';

 
  if (incluirMayusculas) {
    caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (incluirMinusculas) {
    caracteres += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (incluirNumeros) {
    caracteres += '0123456789';
  }
  if (incluirCaracteresEspeciales) {
    caracteres += '!@#$%^&*()_+-=[]{}/<>?';
  }


  if (caracteres === '') {
    throw new Error("Debes seleccionar al menos un tipo de caracteres.");
  }

  let contrasena = '';
  
  for (let i = 0; i < longitud; i++) {
    const indice = Math.floor(Math.random() * caracteres.length); 
    contrasena += caracteres[indice]; 
  }

  return contrasena; 
}


rl.question('¿Cuál es la longitud deseada para la contraseña? ', (input) => {
  const longitud = parseInt(input); 

  if (isNaN(longitud) || longitud <= 0) {
    console.log("Por favor, ingresa un número válido para la longitud.");
    rl.close();
    return;
  }

  rl.question('¿Deseas incluir letras mayúsculas? (sí/no): ', (incluirMayusculas) => {
    const usarMayusculas = incluirMayusculas.trim().toLowerCase() === 'sí';

    rl.question('¿Deseas incluir letras minúsculas? (sí/no): ', (incluirMinusculas) => {
      const usarMinusculas = incluirMinusculas.trim().toLowerCase() === 'sí';

      rl.question('¿Deseas incluir números? (sí/no): ', (incluirNumeros) => {
        const usarNumeros = incluirNumeros.trim().toLowerCase() === 'sí';

        rl.question('¿Deseas incluir caracteres especiales? (sí/no): ', (incluirCaracteresEspeciales) => {
          const usarCaracteresEspeciales = incluirCaracteresEspeciales.trim().toLowerCase() === 'sí';

          try {
            const contrasena = generarContrasena(longitud, usarMayusculas, usarMinusculas, usarNumeros, usarCaracteresEspeciales); // Generar la contraseña
            console.log(`Tu contraseña segura es: ${contrasena}`); 
          } catch (error) {
            console.log(error.message); 
          }

          rl.close(); 
        });
      });
    });
  });
});
