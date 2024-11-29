
let { people } = require('../../../Products.js')

const getPeople = (req, res) => {
    res.status(200).json({ succsess : true, data : people });
}

const createPerson = (req, res) => {
    const { name } = req.body;

    if( !name ){
        return res.status(400).json({ succsess : false, msg : 'please provide name value' });
    }

    people.push({ id : people[people.length-1].id+1, name : name })
    res.status(201).json({ succsess : true, data : [...people] });
}

const createPersonPostman = (req, res) => {
    const { name } = req.body;

    if( !name ){
        return res.status(400).json({ succsess : false, msg : 'please provide name value' });
    }

    people.push({ id : people[people.length-1].id+1, name : name })
    res.status(201).json({ succsess : true, data : [...people] });
}

const updatePerson = (req, res) => {
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

}

const deletePerson = (req, res) => {
    const { id } = req.params;
    const person = people.find( (person) => person.id === Number(id) )
    

    if( !person ){
        return res.status(404).json({ succsess : false, msg : "there is no person with such id" })
    }

    people.splice(person.id-1, 1);
    res.status(200).json({ succsess : true, data : [...people]})
}

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
}