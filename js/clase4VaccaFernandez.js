//Funciones 
//Sintaxis

// function saludar () {
//     console.log('hola mundo')
// }

// saludar();

function suma(x,y){
    return x + y 
}
function resta(x,y){
    return x - y 
}
function mult(x,y){
    return x * y 
}
function div(x,y){
    return x / y 
 }

// function calculadora (primerNumero, segundoNumero, operacion){
//     if(operacion == 'suma'){
//         return suma(primerNumero,segundoNumero)
//     }
//     else if (operacion == 'resta'){
//         return resta(primerNumero ,segundoNumero)
//     }
//     else if (operacion == 'multiplicacion'){
//         return mult(primerNumero , segundoNumero)
//     }
//     else if(operacion=='division'){
//         return div(primerNumero,segundoNumero)
//     }
// }

// let numero1 = prompt('ingrese un numero: ')
// let numero2 = prompt('ingrese otro numero: ')

// alert(calculadora(numero1,numero2,'suma'))

let nombre = prompt('Ingrese su nombre: ')
let compraServicio = prompt('Elija el tipo de servicio')


function iva (y){
    return y*(1+27/100)
}


function servicios () {

     if (compraServicio=='semipermanente'){

          alert(`El precio es de $1500 ` );
          alert(`Precio final con iva : ${iva(1500)}`)
     }
     else if( compraServicio == 'esculpidas'){
        alert(`El precio es de $2000 ` );
        alert(`Precio final con iva : ${iva(2000)}`)
     }
}



servicios()