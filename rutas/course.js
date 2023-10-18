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
            "msg" : "Aqui van a mostrarse todos los cursos"
        })
})

//OBTENER TODOS LOS COURSE POR ID
router.get( '/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Obteniendo cursos con id ${ request.params.id }`
        })
})

//CREAR COURSE
router.post( '/' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : " Aqui se van a crear cursos"
        })
})


//ACTUALIZAR COURSE
router.put( '/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Actualizando cursos con id ${ request.params.id }`
        })
})

//ELIMINAR COURSE
router.delete( '/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Eliminando cursos ${ request.params.id }`
        })
})


//Exportar(commonjs) router
module.exports = router