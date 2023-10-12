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

app.post('/api/v1/devcamp/bootcamps', (request,response)=>{
    response.status(200)
            .json({
                "success": true,
                "msg": "aqui van a mostrarse todos los bootcamps"
            })       
})

//Crear el servidor de la aplicacion 

app.listen(5000, 
    console.log('Servidor ejecutando en puerto' + 5000)
            )


//Rutas del recurso bootcams

app.get('/api/v1/bootcamps', (request,response)=>{
    response.status(200)
            .json({
                "success": true,
                "msg": "aqui van a mostrarse todos los bootcamps"
            })       
})

//Rutas del recurso bootcams por id

app.get('/api/v1/bootcamps/:id', (request,response)=>{
    response.status(200)
            .json({
                "success": true,
                "msg":` obteniendo bootcamp con id ${ request.params.id}`
            })       
})

app.put('/api/v1/devcamp/bootcamps/:id', (request,response)=>{
    response.status(200)
            .json({
                "success": true,
                "msg": "se actualizo bootcamp"
            })       
})

app.delete('/api/v1/devcamp/bootcamps1/:id', (request,response)=>{
    response.status(200)
            .json({
                "success": true,
                "msg": "se elimnino el bootcamp"
            })       
})

