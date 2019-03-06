const Carro= {
    color: 'Rojo', //atributos//
    motor: 'V8',
    marca: 'BMW',
    modelo: '2017',
    arrancar: () => {
        console.log("Estoy arrancando"); //Metodo//
    },
    tocar_claxon: ()=>{
        console.log("Beep Beep");
    }
}
console.log (Carro.color)
console.log (Carro.arrancar ())
Carro.tocar_claxon ();

const Perro={
    color: 'Cafe',
    cuerpo: 'Delgado',
    patas: '4',
    tamaño: 'Mediano',
    raza: 'Indefinida',
    ladrar: ()=>{
        return("Guau, Guau");
    },
    comer: ()=>{
        return("Como croquetas");
    },
    jugar: ()=>{
        console.log ("Estado Jugando");
    }
}
console.log(Perro.tamaño)
Perro.ladrar ()