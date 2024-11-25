//This file isn't working as it doesn't have required files/paths below

const express = require('express');
const path = require('path')
const app = express(); // create server

app.use(express.static('./public'))

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './NodeTurorial/index.html'))
// })




app.all('*', (req, res) => {
    res.status(404).send('resourse not found')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000');
})