const texto = prompt("Ingrese el texto aquí");
let contador = 0;

for (let i = 0; i < texto.length; i++) {
    if (texto.charAt(i).toLowerCase() === 'i') {
        contador++;
    }
}

console.log(`La letra 'i' se repite ${contador} veces en el texto ingresado.`);
