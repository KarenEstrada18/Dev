class Carro{
    constructor(marca, color, motor, modelo){
        this.marca = marca;
        this.color = color;
        this.motor = motor;
        this.modelo = modelo;

    }

    arrancar(){
        return "estoy arrancando"
    }

    //Metodos GET (obtener o llamar el atributo)
    getMarca(){
        return this.marca
    }

    //Metodos SET (modifica el valor)
    setMarca(marca){
        this.marca = marca
    }
    
}


const versa = new Carro ('Nissan', 'Rojo', 'V3', '2017')
console.log (versa.getMarca())
console.log (versa.setMarca('Suzuki'))
console.log (typeof(versa))
console.log (versa.arrancar())

const  bocho = new Carro ('Wolkswagen', 'Amarillo', 'V4','2015')
bocho.marca