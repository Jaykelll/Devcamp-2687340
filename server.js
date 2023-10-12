const express = require('express')

//Crear objeto principal de la api
// De la api

const app = express()


//url de prueba 

app.get('/Prueba', function(request, response) {
    response.send("Hola")
})

app.get('/Prueba2', (request,response)=>{
    response.status(200)
            .json({
                "success": true
            })       
})

//Crear el servidor de la aplicacion 

app.listen(5000, 
    console.log('Servidor ejecutando en puerto' + 5000)
            )