const request = require ('request')

const getAsteroide = (asteroideCerca)=>{
    return new Promise ((resolve,reject)=>{
        request.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=fK40KBlWlI4Db6mWJITcLXX8kr2TqwHn4SxOa2Wn',(err,response,body)=>{
            const asteroide = JSON.parse(body)
            //console.log(asteroide)
            response.statusCode == 200
            ? resolve (asteroide)
            : reject ('Error en getAsteroide')
        });
        });
    }

getAsteroide().then((respuesta) =>{
    const fechas= Object.keys(respuesta.near_earth_objects)
    //console.log(fechas[0])
    //console.log(respuesta.near_earth_objects.fechas)
    for(let i=0;i<fechas.length;i++)
    {
        let fecha= String(fechas[i])
        //console.log (fechas[i])
        //console.log(respuesta.near_earth_objects[fecha])
        console.log(respuesta.near_earth_objects[fecha][0].is_potentially_hazardous_asteroid)
    }
    
    
}).catch ((err)=>{
    console.log(err)
    });