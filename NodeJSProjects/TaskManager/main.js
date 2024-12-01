const express = require('express');
const app = express();
const tasks = require('./NodeJSProjects/TaskManager/Routes/tasks.js')
const connectDB = require('./NodeJSProjects/TaskManager/DB/connect.js');
require('dotenv').config({ path: 'data.env' });
const notFound = require('./NodeJSProjects/TaskManager/Middleware/not-found.js')
const errorHandlerMiddleware = require('./NodeJSProjects/TaskManager/Middleware/error-Handler.js')

// middleware
//app.use(express.static('./index.js')) // the main page/dashboard
app.use(express.json()); // to get the information in the right form

//  routes
// app.get('/hello', (req, res) => {
//     res.send("Task Manager App")
// })

app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);

// app.get('/');
// app.post('/');
// app.get('/:id');
// app.patch('/:id'); // patch is used for partial update, while put changes even the structure/the object
// app.delete('/:id');


const port = 3000;


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI, process.env.MONGO_DB_NAME);
        app.listen(port, console.log(`Server is listening on port ${port}`))
    }
    catch( error ){
        console.log(error);
        
    }
}


start();