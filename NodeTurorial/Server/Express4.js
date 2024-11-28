const express = require('express');
const server = express();
let {people} = require('./Products');

// static assets
server.use(express.static('./methods-public'));
// parse form data
server.use(express.urlencoded({ extended : false }))
// parse json
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ succsess : true})
})

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

server.post('/api/people', (req, res) => {
    const { name } = req.body;

    if( !name ){
        return res.status(400).json({ succsess : false, msg : 'please provide name value' });
    }

    people.push({ id : people[people.length-1].id+1, name : name })
    res.status(201).json({ succsess : true, data : [...people] });
})

server.put('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const person = people.find( (person) => person.id === Number(id) )

    if( !person ){
        return res
            .status(404)
            .json({ succsess : false, msg : 'There is no such person' })
    }
    
    const newPeople = people.map( (person) => {
        if( person.id === Number(id) ){
            person.name = name;
        }
        return person;
    })

    res.status(200).json({ succsess : true, data : [...newPeople]})

})

server.delete('/api/people/:id', (req, res) => {
    const { id } = req.params;
    const person = people.find( (person) => person.id === Number(id) )
    

    if( !person ){
        return res.status(404).json({ succsess : false, msg : "there is no person with such id" })
    }

    people.splice(person.id-1, 1);
    res.status(200).json({ succsess : true, data : [...people]})
})


server.listen(5000, () => {
    console.log("Server is listening");
    
})
