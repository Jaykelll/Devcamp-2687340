const express = require('express')

//CREAR EL OBJETO PRINCIPAL DE LA API CON EXPRESS
const app = express()  

//URL DE PRUEBA
app.get( '/prueba' , function(request , response){
        response.send("Hola")
})

app.get( '/prueba2' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true
        })
})

//RUTAS DEL RECURSO BOOTCAMPS

//OBTENER TODOS LOS BOOTCAMPS
app.get( '/api/v1/devcamp/bootcamps' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : "Aqui van a mostrarse todos los bootcamps"
        })
})

//OBTENER TODOS LOS BOOTCAMPS POR ID
app.get( '/api/v1/devcamp/bootcamps/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Obteniendo bootcamp con id ${ request.params.id }`
        })
})

//CREAR BOOTCAMPS
app.post( '/api/v1/devcamp/bootcamps' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : "Aqui se va a crear bootcamps"
        })
})

//ACTUALIZAR BOOTCAMP
app.put( '/api/v1/devcamp/bootcamps/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Actualizando bootcamp ${ request.params.id }`
        })
})

//ELIMINAR BOOTCAMP
app.delete( '/api/v1/devcamp/bootcamps/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Eliminando bootcamp ${ request.params.id }`
        })
})

//USUARIOS

//OBTENER TODOS LOS USUARIOS
app.get( '/api/v1/devcamp/usuarios' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : "Aqui van a mostrarse todos los usuarios"
        })
})

//OBTENER TODOS LOS USUARIOS POR ID
app.get( '/api/v1/devcamp/usuarios/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Obteniendo usuarios con id ${ request.params.id }`
        })
})

//CREAR USUARIOS
app.post( '/api/v1/devcamp/usuarios' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : "Aqui se van a crear usuarios"
        })
})

//ACTUALIZAR USUARIOS
app.put( '/api/v1/devcamp/usuarios/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Actualizando usuarios con id ${ request.params.id }`
        })
})

//ELIMINAR USUARIOS
app.delete( '/api/v1/devcamp/usuarios/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Eliminando usuarios con id ${ request.params.id }`
        })
})

//CURSOS


//OBTENER TODOS LOS CURSOS
app.get( '/api/v1/devcamp/cursos' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : "Aqui van a mostrarse todos los cursos"
        })
})

//OBTENER TODOS LOS CURSOS POR ID
app.get( '/api/v1/devcamp/cursos/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Obteniendo cursos con id ${ request.params.id }`
        })
})

//CREAR CURSOS
app.post( '/api/v1/devcamp/cursos' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : "Aqui se van a crear los cursos"
        })
})

//ACTUALIZAR CURSOS
app.put( '/api/v1/devcamp/cursos/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Actualizando cursos con id ${ request.params.id }`
        })
})

//ELIMINAR CURSOS
app.delete( '/api/v1/devcamp/cursos/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Eliminando cursos con id ${ request.params.id }`
        })
})

//OPINIONES

//OBTENER TODAS LAS OPINIONES
app.get( '/api/v1/devcamp/opiniones' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : "Aqui van a mostrarse todas las opiniones"
        })
})

//OBTENER TODAS LAS OPINIONES POR ID
app.get( '/api/v1/devcamp/opiniones/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Obteniendo opiniones con id ${ request.params.id }`
        })
})

//CREAR OPINIONES
app.post( '/api/v1/devcamp/opiniones' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : "Aqui se van a crear las opiniones"
        })
})

//ACTUALIZAR OPINIONES
app.put( '/api/v1/devcamp/opiniones/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Actualizando opiniones con id ${ request.params.id }`
        })
})

//ELIMINAR OPINIONES
app.delete( '/api/v1/devcamp/opiniones/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Eliminando opiniones con id ${ request.params.id }`
        })
})


//CREAR EL SERVIDOR DE APLICACIÓN
app.listen(5000 ,
        console.log('Servidor ejecutando en puerto' + 5000))