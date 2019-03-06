class Figura{
    constructor (base,altura){
    this.base= base;
    this.altura = altura
    }
}

    class Rectangulo extends Figura{
        constructor (base,altura){
        super (base,altura)
    }
    areaRectangulo(){
        let e = (this.base*this.altura)
        return( "El area del Rectangulo es: " + e)
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


class Triangulo extends Figura{
    constructor (base,altura){
    super (base,altura)
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