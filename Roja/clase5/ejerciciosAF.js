
//Funcion para un arreglo que muestre los numeros pares del 0 al 20
var pares = () =>{
let pares = []
for (let i=0; i<=20; i++){
if(i%2 == 0){
    pares.push (i)
    }
}
return pares
}

//console.log (pares())

//Funcion Calcule el tiempo necesario para que un automóvil que se mueve con una velocidad de 73000 m/h recorra una distancia de 120 km.

const tiempo = () =>{
    let velocidad = (73000/1000)
    let distancia = 120
    tiempo = (distancia / velocidad)
    return tiempo
}
console.log (tiempo())
