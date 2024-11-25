const express = require('express');
const jwt = require('jsonwebtoken');
const server = express();
const {products} = require('./Products');

const JWT_KEY = "12345678";

server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h1> Home Page <h1>');
    res.json([ { name : 'john' }, { name : 'susan' } ]);
});

server.get('/api/products', (req, res) => {

    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    })

    res.json(newProducts);
    
});

server.get('/api/v1/query', (req, res) => {
    const {search, limit} = req.query;
    let sortedProducts = [...products].sort();

    if( search ){
        sortedProducts = sortedProducts.filter( (product) =>{
            return product.name.startsWith(search);
        } )
    }
    if( limit ){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    res.status(200).json(sortedProducts);
    
})

server.get('/api/products/:ProductId', (req, res) => {

    const singleProduct = products.find((product) => product.id === Number(req.params.ProductId)); // int == string

    if(singleProduct){
        res.status(200).json(singleProduct);
    }
    else{
        res.status(404).json({ message : "There is no such Product" })
    }


    
});

server.listen(5000, () => {
    console.log('Server is listening');
    
});






