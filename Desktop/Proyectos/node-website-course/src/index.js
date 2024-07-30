// Forma tradicional de crear el servidor

// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)

import express from 'express'

const app = express()

app.get('/', function (req, res) {
    res.send('<h1>Bienvenido</h1>')
})

app.get('/about', function (req, res) {
    res.send('<h1>About</h1>')
})

app.listen(3000)
console.log('Server on port', 3000)
