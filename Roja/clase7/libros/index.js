const request= require('request')

const getBook =()=>{
    return new Promise ((resolve,reject) => {
        request.get('https://openlibrary.org/search',(err,response,body)=>{
            const libro= JSON.parse(body)
            response.statusCode == 200
            ? resolve(libro) : reject('Error en getName')
    });
    });
}

const getNameAuthor = (urlBook) => {
    return new Promise((resolve,reject)=>{
        request.get(urlBook,(err,response,body)=>{
            const autor = JSON.parse(body)
            response.statusCode ==200
            ? resolve (autor)
            : reject ('Error en getName')
        });
    });
}

getBook().then((respuesta) => {
    console.log(respuesta.title)
    return getNameAuthor(respuesta.author_name[0])
    }).then((book) =>{
        console.log(book.author_name)
    }).catch((err)=>{
        console.log(err)
    });