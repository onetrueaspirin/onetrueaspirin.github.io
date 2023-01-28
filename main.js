let nombre = prompt("Ingresa tu nombre");
console.log("El nombre es:", nombre);
let respuestaNombre = `Bien ${nombre}, podes empezar con los calculos`;
alert(respuestaNombre)
let numeroUno = parseInt(prompt("Ingrese el primer numero"));
console.log(numeroUno);
let operacion = prompt(`ingrese la operacion deseada: %,
 +,
  -,
   *,
    /`);
console.log(operacion);
let numeroDos = parseInt(prompt("Ingrese el segundo numero"));
console.log(numeroDos);
let resultado = calculadora(numeroUno, operacion, numeroDos);
let mensaje = `El resultado de la operacion es: ${resultado}`;
alert(mensaje);
console.log(mensaje);
if (resultado == '300') {
  alert("Ganaste un premio por encontrar easterEgg");

}
/* Numeros pares  */
let numeroPar = 0;
while (numeroPar < 1000) {
  numeroPar++;
  if (numeroPar % 2 == 0) console.log(numeroPar);
}

/* Numeros inpares */
let numeroInp = 0;
while (numeroInp < 1000) {
  numeroInp++;
  if (numeroInp % 2 == 1) console.log(numeroInp);
}

function calculadora(numero1, operacion, numero2) {

  switch (operacion) {
    case "+":
      return numero1 + numero2;
      break;

    case "-":
      return numero1 - numero2;
      break;

    case "*":
      return numero1 * numero2;
      break;

    case "/":
      return numero1 / numero2;
      break;

    case "%":
      return numero1 / 100 * numero2;
      break;

    default:
      return "operacion no definida";
  }
}
