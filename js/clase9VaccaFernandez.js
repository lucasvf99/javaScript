//event listeners

// let botoncito = document.getElementById('boton_1')

// botoncito.onclick = ()=>{
//     alert('hiciste click')
// }

// let botoncito2  = document.getElementById('boton_2')

// botoncito2.onmouseover= ()=>{
//     console.log('hola')
// }

//envent listeners 
// function ejemplo () {
//     alert('hicieron click')
// }

// botoncito2.addEventListener('click', ejemplo)

// let input_1 = document.getElementById('input_1')

// input_1.addEventListener('change', ()=>{
//     console.log(input_1.value)
// })

function iva (y){
    return y*(1+27/100)
}

let servicios = [ 
    {servicio:'esculpidas', costo:2000},
    {servicio:'semipermanente', costo:1500},
    {servicio:'kaping ', costo:1300}
]


function validarForm (nom,edad) {
    if (nom == '' || nom == 'undefined' || nom.includes ('@')){
        return 'nombre invalido ';
    }
    if(isNaN(edad)|| edad == ''){
        return 'verifique la edad ';
    }
    return 'todo bien'
}




let form = document.querySelector('#formulario');    

    form.addEventListener("submit",(e)=>{
        e.preventDefault () ;
        let nameValue = document.getElementById('nombre2').value
        let edadValue = document.getElementById('edad').value
        let servicioValue = document.getElementById('servicio')
        let mensajeError = validarForm(nameValue,edadValue)
        if(mensajeError == 'todo bien' ){
            alert('procesando datos')
        }else{
            alert(`datos incorrectos ${mensajeError}`)
        }
        
    
    })

console.log('esto es mi array',compraUsuario)

let listaJs = document.getElementById('lista')

form.addEventListener("submit",()=>{
    listaJs.innerHTML= `<li>${form.value}</li>`
})



