const express = require('express');
const server = express();

const peopleRouter = require('D:/OneDrive/Desktop/JavaScript/NodeTurorial/Server/Routes/people.js')
const authRouter = require('./NodeTurorial/Server/Routes/auth.js');

// static assets
server.use(express.static('./methods-public'));
// parse form data
server.use(express.urlencoded({ extended : false }))
// parse json
server.use(express.json());

server.use('/api/people', peopleRouter);
server.use('/login', authRouter);

server.get('/', (req, res) => {
    res.status(200).json({ succsess : true})
})

server.listen(5000, () => {
    console.log("Server is listening");
    
})
