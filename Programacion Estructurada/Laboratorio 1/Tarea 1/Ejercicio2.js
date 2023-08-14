const numeroIngresado = prompt("Ingrese un número");
const numero = Number(numeroIngresado);

if (numero < 0) {
    console.log("Error: Debes ingresar un valor valido");
} else if ((numero % 3 === 0) && (numero % 15 === 0)) {
    console.log("El número " + numero + " es múltiplo de 3 y 15");
} else {
    console.log("El número " + numero + " no es múltiplo de 3 y 15");
}
