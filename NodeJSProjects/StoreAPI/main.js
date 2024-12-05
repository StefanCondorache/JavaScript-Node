require('dotenv').config( { path : 'data.env' } );
require('express-async-errors');


const express = require('express');
const app = express();

const connectDB = require('./NodeJSProjects/StoreAPI/connectDB.js');
const productsRouter = require('./NodeJSProjects/StoreAPI/Routes/products.js')

const notFoundMiddleware = require('./NodeJSProjects/StoreAPI/Middleware/not-found.js');
const errorMiddleware = require('./NodeJSProjects/StoreAPI/Middleware/error-Handler.js');

// middleware
app.use(express.json());

// routes

app.get('/', (req, res) => {
    res.send('Store API');
})

app.use('/api/v1/products', productsRouter);


// products route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.port || 3000;

const start = async () => {
    try {
        // connectDB
        await connectDB( process.env.MONGO_URI, process.env.MONGO_DB_NAME );
        app.listen(port, console.log(`Server is listening port ${port}`) );
    } catch (error) {
       console.error(error);
    }
}

start();