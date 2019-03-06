/*let arreglo = [
    "perrito",
    "gatito",
    "perico"
]

let objeto = {
    uno:"perrito",
    dos:"gatito",
    tres: "perico",
    frutas:[
        "manzana",
        {a:"hola", b: "adios"}
    ]
}

console.log (objeto.frutas[1].b)

let persona ={
    nombre: "Mauricio",
    apellido: "Saavedra",
    nacionalidad: "MX"
}*/

/*class Persona {
    constructor(nombre, apellido, nacionalidad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacionalidad = nacionalidad;
    }

    presentarse (){
        //console.log ("Hola mi nombre es: " + this.nombre + " " + this.apellido);
        return `Hola,
        mi nombre es: ${this.nombre}`
    }

}

const persona_1 = new Persona("Mauricio", "Saavedra");
console.log (persona_1.presentarse());
console.log(persona_1.nacionalidad);*/

//Herencia

/*class Animal {
    constructor (cerebro, piernas){
        this.cerebro = cerebro;
        this.piernas = piernas;
    }

}

class Humano extends Animal {
    constructor (piernas, cerebro,pulgares){
    super (piernas,cerebro);
    this.pulgares = pulgares
    }

    hablar (palabras){
        console.log(palabras)
    }
}

class Mascota extends Animal {
    constructor (piernas,cerebro,pulgas){
        super (piernas,cerebro);
        this.pulgas = pulgas;
    }

    ladra(){
        console.log ("Guau Guau")
    }
}

const karen = new Humano (1,2)
const fido = new Mascota(1,2,100)
console.log (karen.hablar("Estoy hablando"))*/


/*const triangulo = {
    base: '5',
    altura:'10',
    area: ()=>{
        let a = ((triangulo.base* triangulo.altura)/2);
        console.log(a)
    },
     perimetro: ()=>{
         let b = (triangulo.base*3);
         console.log(b)
     }
        
    }
triangulo.area()
triangulo.perimetro()*/

class Triangulo {
    constructor (base,altura){
        this.base= base;
        this.altura = altura
    }
    area(){
        let a = (this.base*this.altura)/2
        return ("El area del Triangulo es: " + a)
    }

    perimetro(){
        let b = (this.base*3)
        return ("El perimetro  del Triangulo es: "+ b)
    }
}

const t = new Triangulo (10,5)
let area = t.area()
let perimetro = t.perimetro()

console.log (area)
console.log(perimetro)

const t2 = new Triangulo (2,2)
let area2 = t2.area()
let perimetro2 = t2.perimetro()

console.log (area2)
console.log (perimetro2)

class Cuadrado extends Triangulo {
    constructor (base){
        super (base)
      
    }

    areaCuadrado(){
        let c = (this.base * this.base)
        return("El area del Cuadrado es: "+ c)
    }

    perimetroCuadrado(){
        let d = (this.base*4)
        return ("El perimetro del Cuadrado es: "+ d)
    }
}

const Cuadrado1 = new Cuadrado (5)
let c = Cuadrado1.areaCuadrado()
let d = Cuadrado1.perimetroCuadrado()

console.log (c)
console.log(d)

class Rectangulo extends Triangulo{
    constructor (base,altura){
    super (base,altura)
}
areaRectangulo(){
    let e = (this.base*this.altura)
    return( " El area del Rectangulo es: " + e)
}
perimetroRectangulo(){
    let f= (this.base*this.altura)
    return ("El perimetro del Rectangulo es: " + f)
}
}

const Rectangulo1 = new Rectangulo (6,3)
let e= Rectangulo1.areaRectangulo()
let f = Rectangulo1.perimetroRectangulo ()

console.log (e)
console.log(f)



