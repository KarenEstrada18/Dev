//Programacion Funcional
//*Declarativa : Afirmaciones para resolver el problema pero no dices como llega a la solucion
//*Imperativa: Algoritmos

/*Las funciones de orden superior tienen como parametros una funcion y que pueden regresar otra funcion (CALLBACK)
funcion (funcion)
Ejecuta codigo de forma asincrona ()
Funciones que vienen en parametros (callback)*/


/*const saludo = (despedida) =>{
    console.log ("Saludando")
    despedida()
}

const despedida = () =>{
    console.log ("Adios")
}

saludo (despedida)

const saludo = () => {
    console.log("Adios")
} => {
    console.log ("Hola");
}

saludo (despedida)*/

//CLOUSER encerrar una funcion dentro de otra funcion y que se regrese

const multiplicador = factor =>{
    return x => x * factor
    }
let triplicador = multiplicador(3)
let cuadriplicador = multiplicador(4)

console.log (triplicador(5))
console.log (cuadriplicador(5))