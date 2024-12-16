require('dotenv').config({ path : 'data.env' });
require('express-async-errors');

const express = require('express');
const app = express();

const authentificateUser = require('./NodeJSProjects/JobsAPI/Middleware/authentification.js')

// connect DB
const connectDB = require('./NodeJSProjects/JobsAPI/DB/connectDB')

//routers
const authRouter = require('./NodeJSProjects/JobsAPI/Routes/auth.js');
const jobsRouter = require('./NodeJSProjects/JobsAPI/Routes/jobs.js')

// errror handler
const notFoundMiddleWare = require('./NodeJSProjects/JobsAPI/Middleware/not-found');
const errorHanderMiddleware = require('./NodeJSProjects/JobsAPI/Middleware/error-Handler');

app.use(express.json());

// routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', authentificateUser, jobsRouter);

app.use(notFoundMiddleWare);
app.use(errorHanderMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI, process.env.MONGO_DB_NAME);
        app.listen(port, console.log(`Server is listening on port ${port}`));
    } catch (error) {
        console.error(error);
    }
}

start()