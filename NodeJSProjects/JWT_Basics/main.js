require('dotenv').config({ path : 'data.env' });
require('express-async-errors');

const express = require('express');
const app = express();

const mainRouter = require('./NodeJSProjects/JWT_Basics/Routes/main')
const notFoundMiddleware = require('./NodeJSProjects/JWT_Basics/Middleware/not-found');
const errorHanderMiddleware = require('./NodeJSProjects/JWT_Basics/Middleware/error-Handler');

// middleware
app.use(express.static('./NodeJSProjects/JWT_Basics/public')) // main folder usually with index page file
app.use(express.json());

app.use('/api/v1', mainRouter)

app.use(notFoundMiddleware);
app.use(errorHanderMiddleware);

const port = process.env.port || 3000;

const start = async () => {
    try {
        app.listen(port, console.log(`Server is listening on port ${port}`));
    } catch (error) {
        console.error(error);
    }
}

start()