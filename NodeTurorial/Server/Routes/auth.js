const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { name } = req.body;
    
    if( name ){
        return res.status(200).send( `Welcome ${name}` );
    }
    else{
        //router.render('/');
        return res.status(401).send( `The name is required` )
    }
    
})

module.exports = router;