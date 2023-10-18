const express = require('express')
const router = express.Router()

//URI de bootcamps
//las uris tambien suslen llamarse endpoints
//OBTENER TODOS LOS REVIEWS
router.get( '/' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : "Aqui van a mostrarse todos los reviews"
        })
})

//OBTENER TODOS LOS REVIEWS POR ID
router.get( '/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Obteniendo reviews con id ${ request.params.id }`
        })
})

//CREAR REVIEWS
router.post( '/' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : " Aqui se van a crear reviews"
        })
})


//ACTUALIZAR REVIEWS
router.put( '/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Actualizando reviews con id ${ request.params.id }`
        })
})

//ELIMINAR REVIEWS
router.delete( '/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Eliminando reviews ${ request.params.id }`
        })
})


//Exportar(commonjs) router
module.exports = router