function calcularHexagono() {
  let lado = parseFloat(prompt("Ingrese la longitud de un lado del hexágono:"));

  if (lado <= 0) {
    console.log("Error: Ingrese una longitud de lado válida (mayor que 0).");
    return;
  }

  let area = (3 * Math.sqrt(3) * Math.pow(lado, 2)) / 2;
  let perimetro = 6 * lado;

  console.log("El área del hexágono es: " + area.toFixed(2));
  console.log("El perímetro del hexágono es: " + perimetro);
}

calcularHexagono();



