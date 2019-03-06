/*const request = require('request')

function getMovie(filmNumber){
    request.get(`https://swapi.co/api/films/${filmNumber}/`,
        (err,response,body) => {
            if(response.statusCode=== 200){
                const peli = JSON.parse(body)
                console.log (peli.title)
                const urlNew = peli.characters[3]
                //console.log(urlNew)
                request.get(urlNew,
                    (err,response,body)=>{
                        if(response.statusCode ===200){
                            const personaje = JSON.parse (body)
                            console.log(personaje.name)
                        }else{
                            console.log("Peticion Incorrecta")
                        }
                    })
            }else{
                console.log('Peticion incorrecta')
            }
        }
    )
}

getMovie(4)*/



const request = require('request')

function getPokemon(namePokemon){
    request.get(`https://pokeapi.co/api/v2/pokemon/${namePokemon}/`,
    (err,response,body) => {
        if(response.statusCode === 200){
            const pokemon = JSON.parse(body)
            console.log(pokemon.name)
            const urlPokemon = pokemon.types[0].type.url
            //console.log (urlPokemon)
            request.get (urlPokemon,
                (err,response,body)=>{
                    if(response.statusCode === 200){
                        const tipos = JSON.parse(body)
                        console.log(tipos.name)
                    }else{
                        console.log("Peticion Incorrecta")
                    }
                })
        }else{
            console.log ("Peticion Incorrecta")
            }
        })
    }
    
getPokemon (3)