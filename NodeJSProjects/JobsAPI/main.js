require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

// errror handler
const notFoundMiddleWare = require('./Middleware/not-found');
const errorHanderMiddleware = require('./Middleware/error-Handler');

app.use(express.json());



// routes
app.get('/', (req, res) => {
    res.send('jobs api')
})

app.use(notFoundMiddleWare);
app.use(errorHanderMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        app.listen(port, console.log(`Server is listening on port ${port}`));
    } catch (error) {
        console.error(error);
    }
}

start()