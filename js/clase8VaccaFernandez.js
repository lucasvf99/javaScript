//             //DOM
// console.log(document.getElementsByClassName('title'))


// let listota = document.getElementsByClassName("listita")

// console.log(listota)

// for(let i = 0 ; listota.length ; i++){
//     if(i % 2 == 0){
//         listota[i].innerHTML ="soy inpar";
//     }else{
//         listota[i].innerHTML= "soy par"
//     }
// }

                //Agregar elementos

// let nuevoDiv = document.createElement('div');

// nuevoDiv.innerHTML =" <h2> hola mundo</h2>";
// nuevoDiv.id= 'agregadoJs'

// document.body.appendChild(nuevoDiv) // preped agrega al principio del dom 

// let divEliminar = document.getElementById('agregadoJs')

// document.body.removeChild(divEliminar);


// let inputName = document.getElementById('name')


// console.log(inputName.value)

// let hermanos = ['lucas','tomas','juan','nicolas']

// let ulAgregar = document.getElementById('personas');

// for( persona of hermanos ){
//     let li = document.createElement('li');
//     li.innerText = persona
//     ulAgregar.appendChild(li)
// }



function iva (y){
    return y*(1+27/100)
}

let servicios = [ 
    {servicio:'esculpidas', costo:2000},
    {servicio:'semipermanente', costo:1500},
    {servicio:'kaping ', costo:1300}
]



let compraUsuario = [ ]

 let nombre 
 let servicio 
 let edad
  for ( let i= 0; i<1; i++){
     nombre=prompt('ingrese su nombre:') 
     edad = prompt('ingrese su edad')
     servicio = prompt ('ingrese el servicio que quiere:')
   
     compraUsuario.push(nombre,edad,servicio)
 }

 console.log(compraUsuario)

 function agregadoHtml (){
     let li = document.createElement('div')
     li.innerHTML = `<h3> nombre: ${nombre}</h3>
                     <p> edad: ${edad}</p>
                     <p>  servicio: ${servicio}</p>
                     costo:  $ ${iva(servicios[0].costo)}`
    document.body.appendChild(li)
 }


function sumaIva (){
            if(servicio == 'esculpidas'){ 
                agregadoHtml()
            }
         else if (servicio=='semipermanente'){
            agregadoHtml()
         }
             else if (servicio=='kaping'){
                agregadoHtml()
            }
         
        }


console.log(sumaIva())





