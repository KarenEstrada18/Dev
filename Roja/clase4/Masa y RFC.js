class Persona{
    constructor(nombre,edad,sexo,peso,altura){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
       let masaCorporal =(this.peso/(this.altura*this.altura))
    
       return ("Tu IMC es de : "+ masaCorporal.toFixed(2))

    }

    esMayorDeEdad(){
       if (this.edad >= 18){
            return ("Es mayor de Edad")
        } else (this.edad<18)
            return ("Es menor de Edad")
        }
    }

    const Persona1 = new Persona ('Ana Karen Estrada Salinas','24','F','75','1.76')
    console.log (Persona1.esMayorDeEdad())
    console.log (Persona1.calcularIMC())

    /*class RFC extends Persona{
        constructor (nombre,edad,sexo){
        super (nombre,edad,sexo)
        }
        
        calcularRFC (){
            RFC = 
        }
    }*/