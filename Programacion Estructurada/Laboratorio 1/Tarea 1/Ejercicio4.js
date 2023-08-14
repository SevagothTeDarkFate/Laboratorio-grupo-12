function RadianesaGrados(radians) {
    return radians * (180 / Math.PI);
  }
  
  let radianesusuario = parseFloat(prompt("Ingrese el valor en radianes:"));
  
  if (radianesusuario < 0) {
    console.log("Error: Ingrese un valor en radianes válido (no negativo).");
  } else {
    let resultado = RadianesaGrados(radianesusuario);
    console.log("El valor en grados es: " + resultado.toFixed(2));
  }
  

  