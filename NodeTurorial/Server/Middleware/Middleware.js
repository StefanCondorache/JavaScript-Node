const express = require('express');
const server = express();
const logger = require('./Logger')
const authorize = require('./Authorize');
const jwt = require('jsonwebtoken');
// req => middleware => res

server.use([logger, authorize]);

server.get('/', (req, res) => {

    res.send("Home").status(200);
})

server.get('/about', (req, res) => {


    res.send("About").status(200);
})

server.listen(5000, () => {
    console.log("Server is listening");
    
})