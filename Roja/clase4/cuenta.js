class Cuenta {
    constructor (titular,cantidad){
        this.titular = titular;
        this.cantidad = cantidad;
    }

    getCantidad(){
        return cantidad
    }

    setCantidad(cantidad){
        this.cantidad = cantidad

    }

    ingresarCantidad(cantidad){
        if(cantidad > 0){
            this.cantidad += cantidad;
        }
    }


    retirarCantidad(cantidad){
        if (this.cantidad - cantidad <10){
            this.cantidad = 0;
            return ("Error, cantidad equivocada")
            } else {
                this.cantidad -= cantidad;
            }
    }
}

const Cuenta1 = new Cuenta ('Karen Estrada', '100')
//Cuenta1.ingresarCantidad(500)
Cuenta1.retirarCantidad (50)
console.log (Cuenta1)
