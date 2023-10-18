const express = require('express')

//conexion cobn las rutas
//rutas de bootcamp
const bootcampRoutes = require('./rutas/bootcamps')
const usersRoutes = require('./rutas/users')
const courseRoutes = require('./rutas/course')
const reviewsRoutes = require('./rutas/reviews')

//CREAR EL OBJETO PRINCIPAL DE LA API CON EXPRESS
const app = express()  

//vincular rutas del objeto app
app.use("/api/v1/devcamp/bootcamps" , bootcampRoutes)
app.use("/api/v1/devcamp/users" , usersRoutes)
app.use("/api/v1/devcamp/course" , courseRoutes)
app.use("/api/v1/devcamp/reviews" , reviewsRoutes)

//CREAR EL SERVIDOR DE APLICACIÓN
app.listen(5000 ,
        console.log('Servidor ejecutando en puerto' + 5000))