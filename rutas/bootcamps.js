const express = require('express')
const router = express.Router()

//URI de bootcamps
//las uris tambien suslen llamarse endpoints
//OBTENER TODOS LOS BOOTCAMPS
router.get( '/' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : "Aqui van a mostrarse todos los bootcamps"
        })
})

//OBTENER TODOS LOS BOOTCAMPS POR ID
router.get( '/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Obteniendo bootcamp con id ${ request.params.id }`
        })
})

//CREAR BOOTCAMPS
router.post( '/' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : "Aqui se va a crear bootcamps"
        })
})

//ACTUALIZAR BOOTCAMP
router.put( '/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Actualizando bootcamp ${ request.params.id }`
        })
})

//ELIMINAR BOOTCAMP
router.delete( '/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Eliminando bootcamp ${ request.params.id }`
        })
})


//Exportar(commonjs) router
module.exports = router

