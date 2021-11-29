
// let nombre = prompt('Escriba su nombre: ')
// let edad = prompt('Ingrese su edad : ')

// while( edad <18 || edad == null || edad == '' ){
  
//         edad = prompt('Ingrese nuevamente su edad: ')
        
// }

// alert('Usted se a logueado correctamente')

let nombre = prompt('Ingrese su nombre: ')
let suma = 0 ;
let interacciones = 5;

for ( let i = 0 ; i<interacciones; i++){

    nota = parseInt(prompt( `Hola ${nombre}, ingrese la nota del parcial  ${i + 1} `));
    console.log('esta es la nota :', nota)
    suma += nota ;
    console.log('esta es la suma ', suma)
  
}

let promedio = suma / interacciones

    
    if(promedio < 7 ){
        alert('Usted a desaprobado ');
        switch(promedio){
            case 2:
                alert(`Tu promedio es de ${promedio} no te desanimes, a seguir estudiando`)
                break;
            case 3:
                alert(`Tu promedio es de ${promedio} no te desanimes, a seguir estudiando`)
                break;
            case 4: 
                alert(`Tu promedio es de ${promedio} no te desanimes, a seguir estudiando`)
                break;
            case 5:
                alert(`Tu promedio es de ${promedio} no te desanimes, a seguir estudiando`)
                break;
            case 6: 
                alert(`Tu promedio es de ${promedio} no te desanimes, a seguir estudiando`)
                break;
                default:
                    alert(`Tu promedio es de ${promedio} no te desanimes, a seguir estudiando`)
        }

    }else{
        alert(`su promedio es ${promedio}`)
        alert('Usted a aprobado')
    }



