require('dotenv').config({ path : 'data.env' });
require('express-async-errors');

// extra security packages
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')

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

app.set('trust proxy', 1);
app.use(rateLimiter({
        windowMs: 15 * 60 * 1000,   // 15 minutes
        max: 100                    // Limit each IP to 100 requests per windowMs 
    })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

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