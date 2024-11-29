const express = require('express');
const router = express.Router();

let { people } = require('D:/OneDrive/Desktop/JavaScript/Products.js');

router.get('/', (req, res) => {
    res.status(200).json({ succsess : true, data : people });
})

router.post('/', (req, res) => {
    const { name } = req.body;

    if( !name ){
        return res.status(400).json({ succsess : false, msg : 'please provide name value' });
    }

    people.push({ id : people[people.length-1].id+1, name : name })
    res.status(201).json({ succsess : true, data : [...people] });
})

router.post('/postman', (req, res) => {
    const { name } = req.body;

    if( !name ){
        return res.status(400).json({ succsess : false, msg : 'please provide name value' });
    }

    people.push({ id : people[people.length-1].id+1, name : name })
    res.status(201).json({ succsess : true, data : [...people] });
})

router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const person = people.find( (person) => person.id === Number(id) )
    

    if( !person ){
        return res.status(404).json({ succsess : false, msg : "there is no person with such id" })
    }

    people.splice(person.id-1, 1);
    res.status(200).json({ succsess : true, data : [...people]})
})

module.exports = router;