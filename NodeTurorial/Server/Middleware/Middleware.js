const express = require('express');
const server = express();
const logger = require('./Logger')
const authorize = require('./Authorize');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');


// req => middleware => res

// 1. use vs route
// 2. options - our own / express/ third party

// server.use(authorize);           // or
//server.use([logger, authorize]);    //  <----- like that
//server.use('/api', logger); // for every get that starts with "/api";

server.use(morgan('tiny'));

server.get('/', (req, res) => {

    res.send("Home").status(200);
})

server.get('/about', (req, res) => {
    res.send("About").status(200);
})

server.get('/about/items', (req, res) => {
    res.send('Items');
})

server.listen(5000, () => {
    console.log("Server is listening");
    
})