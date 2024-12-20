const express = require('express');
const router = express.Router();

const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../Controllers/people')

// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

// another way of using router

router.route('/').get(getPeople)
                 .post(createPerson);

router.route('/postman').post(createPersonPostman);

router.route('/:id').put(updatePerson)
                    .delete(deletePerson);

module.exports = router;