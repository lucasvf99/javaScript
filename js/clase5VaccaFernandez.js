// //OBJETOS

// let persona = {
//     dni:'41551038',
//     apellido: 'vacca fernandez',
//     nombre:'lucas',

// }

// console.log(persona)
// console.log(persona.nombre, persona.apellido)
// console.log('esto es otra forma de traer datos de objetos:', persona['dni'])

// //cambiar atributo 

// persona.apellido = "gonzales";
// console.log('cambiar atributo;',persona.apellido);

// //agregar 

// persona.profesion = 'programador';
// console.log('agregar atributo', persona.profesion)

            //Constructor

// function carro (color,puertas,modelo,marca) {
//     this.color= color,
//     this.puertas= puertas,
//     this.modelo= modelo,
//     this.marca = marca;
// }

// let nuevoAuto = new carro ('negro',3,'focus','ford')
// console.log(nuevoAuto)

            //METODOS

            
//  function carro (color,puertas,modelo,marca) {
//      this.color= color,
//      this.puertas= puertas,
//      this.modelo= modelo,
//      this.marca = marca;
//  }

//  let nuevoAuto = new carro ('negro',3,'focus','ford')
//  console.log(nuevoAuto)

//     //recorrer el objeto

//  for(const atributo in nuevoAuto){
//      console.log(nuevoAuto[atributo]);
//  }

                    //CLASES

// class Animal {
//     constructor(especie,patas,color){
//         this.especie = especie,
//         this.patas = patas,
//         this.color = color;
//     }
// }

// const perro = new Animal ('canino',4,'marron')

// for(let atributo in perro){
//     document.writeln(perro[atributo]);
// }

    //metodos en clases 

//     class Animal {
//         constructor(especie,patas,color,nombre){
//             this.especie = especie,
//             this.patas = patas,
//             this.color = color,
//             this.nombre = nombre;
//         }
//         ladrar(){
//             console.log(`${this.nombre} esta ladrando`)
//         }
//     }
    
//     const perro = new Animal ('canino',4,'marron','lucas')
    
//     for(let atributo in perro){
//         document.writeln(perro[atributo]);
//     }
// perro.ladrar()

function iva (y){
    return y*(1+27/100)
}


class Datos{
    constructor(nombre,edad,dni,servicio){
        this.nombre= prompt('ingrese su nombre: '),
        this.edad = prompt('ingrese su edad: '),
        this.dni=prompt('ingrese su dni: '),
        this.servicio=prompt('ingrese el tipo de servicio: ');
    }
    sumaIva(){
        if(compra.servicio == 'esculpidas'){
            alert(`El precio es de $2000 ` );
            alert(`Precio final con iva : ${iva(2000)}`)
        }
        else if (compra.servicio=='semipermanente'){
            alert(`El precio es de $1500 ` );
            alert(`Precio final con iva : ${iva(1500)}`)
        }
      
    }
}

const compra = new Datos ()

console.log(compra)

 alert(compra.sumaIva())
 
