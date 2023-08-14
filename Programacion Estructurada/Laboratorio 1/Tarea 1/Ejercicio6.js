const yearIngresado = prompt("Ingresa un año:");
const year = parseInt(yearIngresado);

if (year < 0) {
    console.log("Error: Debes ingresar un valor valido");
} else {
    function esBisiesto(year) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            return true;
        } else {
            return false;
        }
    }

    if (esBisiesto(year)) {
        console.log(`${year} es un año bisiesto.`);
    } else {
        console.log(`${year} no es un año bisiesto.`);
    }
}
