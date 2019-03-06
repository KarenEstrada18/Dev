const express = require('express')
const bodyParser = require("body-parser")

const {Pelicula} = require("./mongooseClient")
const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get("/",(req, res) => {
    res.send({message: "index"})
})

//PRIMER POST A DB
app.post('/api/v1/pelicula', (req, res)=>{
    const {titulo, year, descripcion, portadas, genero, director} = req.body;
    const nuevaPelicula = Pelicula({
        titulo, 
        year, 
        descripcion, 
        portadas, 
        genero, 
        director
    })
    console.log(nuevaPelicula)
    nuevaPelicula.save((err, pelicula)=>{
        err ? res.status(409).send(err) : res.send(pelicula)
    })
});

//PRIMER GET A LA BD
app.get("/api/v1/busqueda/pelicula",(req,res) =>{
    const q = req.query
    console.log(q)
    Pelicula.findOne(q).exec()
    .then(peliculas => res.status(200).send(peliculas))
    .catch(err => res.status(409).send(err))
})

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
})