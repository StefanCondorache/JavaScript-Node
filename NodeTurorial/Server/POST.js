const express = require('express');
const server = express();
let {people} = require('./Products');

// static assets
server.use(express.static('./methods-public'));
// parse form data
server.use(express.urlencoded({ extended : false }))
// parse json
server.use(express.json());

server.get('/api/people', (req, res) => {
    res.status(200).json({ succsess : true, data : people });
})

server.post('/login', (req, res) => {
    const { name } = req.body;
    
    if( name ){
        return res.status(200).send( `Welcome ${name}` );
    }
    else{
        server.render('/');
        return res.status(401).send( `The name is required` )
    }
    
})

server.post('./api/people', (req, res) => {
    const { name } = req.body;

    if( !name ){
        return res.status(400).json({ succsess : false, msg : 'please provide name value' });
    }
    res.status(201).json({ succsess : true, person : name });
})

server.listen(5000, () => {
    console.log("Server is listening");
    
})
