const request =require ('request')

const getMoneda = (monedaCara)=>{
    return new Promise ((resolve,reject)=>{
        request.get(`https://api.coinmarketcap.com/v2/ticker/?start=101&limit=10&sort=id&structure=array?convert=MXN`,(err,response,body)=>{
            const moneda= JSON.parse(body)
            console.log (body)
            response.statusCode == 200
            ? resolve (moneda)
            : reject ('Error en getMoneda')
        });
});
}



getMoneda().then((respuesta)=>{
    console.log(respuesta.data[0].name)
}).catch((err)=>{
console.log(err)
});

