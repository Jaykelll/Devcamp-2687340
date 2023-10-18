const express = require('express')
const router = express.Router()

//URI de bootcamps
//las uris tambien suslen llamarse endpoints
//OBTENER TODOS LOS USUARIOS
router.get( '/' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : "Aqui van a mostrarse todos los usuarios"
        })
})

//OBTENER TODOS LOS USUARIOS POR ID
router.get( '/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Obteniendo usuarios con id ${ request.params.id }`
        })
})

//CREAR USERS
router.post( '/' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : " Aqui se van a crear usuarios"
        })
})


//ACTUALIZAR USERS
router.put( '/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Actualizando users con id ${ request.params.id }`
        })
})

//ELIMINAR USERS
router.delete( '/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Eliminando users ${ request.params.id }`
        })
})


//Exportar(commonjs) router
module.exports = router

