                //Storage
// localStorage.setItem('primerLocal','javaScript');
// sessionStorage.setItem('saludo','hola');

                //lo llamamos 

// let localUno = localStorage.getItem('primerLocal')
// console.log(localUno)

//ejemplo con for y foreach 

// const tomarTodo = () =>{
//     for(let i= 0; i <localStorage.length; i++){
//         let clave = localStorage.key(i);
//         console.log('clave ' + clave );
//         console.log('valor '+ localStorage.getItem(clave))
//     }
// }

// let listaNombre = ['lucas','nicolas','juan','tomas'];

// let guardaLocal = (indice,valor) =>{
//     localStorage.setItem(indice,valor);
// }

// listaNombre.forEach((nombre,indice) =>{
//     guardaLocal(indice,nombre);
// })

// tomarTodo()


                            //JSON

// let objetoString = JSON.stringify({id:3,nombre:'lucas',hobbie:'alumno'})

// localStorage.setItem('objetito', objetoString)
// console.log(localStorage.getItem('objetito'))

 localStorage.clear()

 function iva (y){
    return y*(1+27/100)
}

 let servicios = [
     {servicio:'esculpidas', precio:2500},
     {servicio:'kaping', precio:1500},
     {servicio:'semipermanente', precio:2000}
 ]

 servicios = JSON.stringify(servicios)
 let objtDesordenado = localStorage.setItem('serviciosCande', servicios);

 class candela {
     constructor(obj){
        this.servicio = obj.servicio;
        this.precio = obj.precio
     }
     sumaIVa (){
         return  iva(this.precio) 
     }
 }

 let objtOrdenado = JSON.parse(localStorage["serviciosCande"]);
 let listaPrecios = []

 for (precios of objtOrdenado){
     listaPrecios.push(new candela(precios))
 }

 console.log(listaPrecios)