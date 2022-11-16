/*
Estructura de una funcion

function nombreFunction(){
    codigo a ejecutar por la funcion
}
*/

// //Declarar funcion
// function saludar() {
//     let nombre = prompt ("Ingrese nombre")
//     let mensaje = `Hola ${nombre}`
//     alert(mensaje);
// }
// //LLamar a la función
// saludar();
 
//calculadora

// function calculadora (primerNumero, segundoNumero, operacion){
//     switch(operacion){
//         case "+":
//             return primerNumero + segundoNumero
//             break;
//         case "-":
//             return primerNumero - segundoNumero
//             break;
//         case "*":
//                 return primerNumero * segundoNumero
//             break;
//         case "/":
//                 return primerNumero / segundoNumero
//             break;    
//         default:
//             return 0;
//             break;    
            
//     }
// }
// console.log(calculadora(10, 7, "/"))

//Funciones anonimas y flechas

 /*const suma  = function (a, b) { return a + b }
 const resta = function (a, b) { return a - b }

 console.log( suma(15,20) )
 console.log( resta(15,5) ) */

// let  suma = (num1, num2) => {return num1 + num2}
// console.log(suma(4,5))

/*const suma = (a,b) => a + b 
const resta = (a,b) => a - b 
const iva = x => x * 0.21

let precioProducto = 500
let descuento = 50
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)),descuento);
                = resta(suma(500, iva(500)),50);
                = resta(suma(500, 500*0.21 ),50);
*/

// const suma = (a,b) => a + b 
// const resta = (a,b) => a - b 
// const iva = x => x * 0.21

// let precioProducto = parseInt(prompt("Ingrese precio del producto"));
// let descuento = parseInt(prompt("Ingrese el descuento"));
// let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)),descuento);
// alert(nuevoPrecio);

let descuentoBlackFriday = prompt("Ingrese codigo de descuento")

if(descuentoBlackFriday === "BLCK"){

    const resta = (a,b) => a - b 
    const blck = x => x * 0.30
     
    let precioProducto = parseInt(prompt("Ingrese precio del producto"));
    let nuevoPrecio = resta(precioProducto, blck(precioProducto));
    alert("El precio con descuento es $" + nuevoPrecio);
    
}else{
    alert ("Codigo incorrecto, intente nuevamente")
}
