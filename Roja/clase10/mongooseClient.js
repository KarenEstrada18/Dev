const mongoose = require("mongoose")
//const URL = "mongodb://karen:123456k@ds147030.mlab.com:47030/devf_karen"

mongoose.connect('mongodb://karen:123456k@ds147030.mlab.com:47030/devf_karen')
const db = mongoose.connection;
db.on('error', ()=> console.log("Error al conectar a la BD"))
.once ('open', ()=> console.log('Conexion exitosa!'))


const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId; //AUTOINCREMENTABLE DE MONGO AKA EL ID

const peliSchema = new Schema({
    pelicula: ObjectId,
    titulo: String,
    year: String,
    description: { type: String },
    portadas:[String],
    genero: {
        type: String,
        enum: ["Comedia", "Drama", "Terror"],
        require: "El género es obligatorio"
    },
    director: {
        type: String,
        default : "Karen"
    }
}) 


const Pelicula = mongoose.model("Película", peliSchema);

module.exports = { Pelicula }