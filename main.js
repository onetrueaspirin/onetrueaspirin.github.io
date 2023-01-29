let nombre = prompt("Ingresa tu nombre");
console.log("El nombre es:", nombre);
let respuestaNombre = `Bien ${nombre}, podes empezar con los calculos`;
alert(respuestaNombre)
let numeroUno = parseInt(prompt("Ingrese el primer numero"));
console.log(numeroUno);
let operacion = prompt("Ingrese la operacion deseada: %,+,-,*,/");
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

let operacion2 = prompt("ingrese par o inpar para averriguar los numeros pares o inpares de su resultado");
console.log(operacion2);
if (operacion2 === "par") {
    /* Numeros pares  */
    let par = 0;
    while (par < resultado) {
        par++;

        let mensaje2 = `Los numeros pares del numero ${resultado} son los siguentes: ${par}`;
        if (par % 2 == 0) {
            console.log(par);
            alert(mensaje2);
        }

    }
} else {

    /*  inpares */
    let inpar = 0;
    while (inpar < resultado) {
        inpar++;
        let mensaje3 = `Los numeros pares del numero ${resultado} son los siguentes: ${inpar}`;
        if (inpar % 2 == 1) {
            console.log(inpar);

            alert(mensaje3);
        }

    }
}
