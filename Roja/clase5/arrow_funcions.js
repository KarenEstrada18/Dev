//Arrow Functions

var sum = (a,b) => {
    return a+b
}

var sum2= (a,b) => a+b

var saludo = (nombre) => console.log(`Hola: ${nombre}`)

var saludo2 = nombre => console.log(`Hola: ${nombre}`)

var saludo3 = () => "Hola como estas"

/*console.log (sum2(2,2))
saludo("Karen")
saludo2("Ana")
console.log(saludo3 ())

//var foo = params => ({foo:bar})
             //   ||
var foo = () => ({nombre:"Karen"})

persona = foo()
console.log(persona.nombre)*/

var foo = (nombre,edad,...rest) => {
    return(
        {
            nombre:nombre,
            edad:edad,
            estatura_peso: rest
        }
    )
}

let persona = foo("Karen", 24,15)
console.log(persona.foo)

/*var parametros_rest = (...resto)=>{
    console.log (resto[0])
}

parametros_rest(1)
parametros_rest (9)*/
