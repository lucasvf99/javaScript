//             //ARRAY

// let lista = [
//         'SI',
//          34,
//          true,
//          [1,2,3],
//          {id:1,nomre:'lucas'}

// ]

// console.log(lista[4])

                        //CON FOR

// let nombres = [
//     'lucas',
//     'matias',
//     'tomas',
//     'nicolas',
// ]

// for (let i = 0 ; i<4 ; i++){
//     console.log(nombres[i])
// }

// nombres.forEach((elemento)=>{
//     console.log(`hola ${elemento} como estas ? `)
// }
// )

                        //PUSH (agrega dato al array, a lo ultimo)

// nombres.push('juan')
// console.log(nombres)

                            //UNIR ARRAY CONCAT

// let lista1 = [1,2,3]
// let lista2 = [4,5,6]

// let lista3 = lista1.concat(lista2)
// console.log(lista3)

                    //Agregar por loop

// let nombres = []
// let nombre 
// for ( let i= 0; i<6; i++){
//     nombre=prompt('ingrese su nombre:')
//     nombres.push(nombre)
// }

// console.log(nombres)


                //FOR OF

// let listaAnimal = [
//     {especie : 'gato', nombre:'chimu'},
//     {especie : 'perro', nombre:'chima'},
//     {especie : 'jirafa', nombre:'luli'}
// ]

// console.log(listaAnimal)

// for (let animal of listaAnimal){
//     console.log(animal.nombre)
// }

            //FILTER

//  let nombre = ['jose','jose','eugenio','jose']

//  console.log( nombre.filter(nombre => nombre != 'jose'));

//              //MAP
//  let numeros = [1,2,3,4]

//  console.log(numeros.map(x => x+3))




 function iva (y){
     return y*(1+27/100)
 }

 let servicios = [ 
     {servicio:'esculpidas', costo:2000},
     {servicio:'semipermanente', costo:1500},
     {servicio:'kaping ', costo:1300}
 ]



  class Datos{
      constructor(nombre,edad,servicio){
         this.nombre= prompt('ingrese su nombre: '),
         this.edad = prompt('ingrese su edad: '),
         this.servicio=prompt('ingrese el tipo de servicio: ');
     }

     sumaIva(){
         if(compra.servicio == 'esculpidas'){ 
              alert(`Servicio ${servicios[0].servicio} : $ ${iva(servicios[0].costo)}`)
         }
         else if (compra.servicio=='semipermanente'){
             alert(`Servicio ${servicios[1].servicio} : $ ${iva(servicios[1].costo)}`)
         }
         else if (compra.servicio=='kaping'){
             alert(`Servicio ${servicios[2].servicio} : $ ${iva(servicios[2].costo)}`)
         }
      
     }
 }


 const compra = new Datos ()



 console.log(compra)

 alert(compra.sumaIva())

                                    // segundo desafio 

  var productos = [
     { producto: 'camisa', valor: 2200 },
     { producto: 'jean', valor: 2500 },
     { producto: 'zapatillas', valor: 10000 }, 
     {producto: 'campera', valor:20000},
     {producto: 'cinturon', valor: 500},
     { producto: 'remera', valor: 1000 },
    
   ];
   productos.sort(function (a, b) {
     if (a.valor > b.valor) {
       return 1;
     }
     if (a.valor < b.valor) {
       return -1;
     }
    
     return 0;
   });

   console.log(productos)
 
 
  

 