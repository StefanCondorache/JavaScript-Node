const Task = require('../Modules/task.js');
const asyncWrapper = require('../Middleware/async.js')


const getAllTasks = asyncWrapper( async (req, res) => {  
        const tasks = await Task.find({}) // as an argument find() accepts filter, but without it, it returns all the objects 
        res.status(200).json({tasks});
        // res.status(200).json({ tasks, amount : tasks.length});
        //res.status(200).json({ success : true, data : { tasks, nHabits : tasks.length } });
})

const createTask = async (req, res) => {
    try{
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    }
    catch(err){
        res.status(500).json({ error : err.message })
    }

}

const getTask = async (req, res) => {
    try {
        const { id : taskID } = req.params;
        const task = await Task.findOne({ _id : taskID })
        
        if( !task ){
            const error = new Error('Not Found');
            error.status = 404;
            return next(error)
            // return res.status(404).json({ msg : `No task with id : ${taskID}` });
        }

        res.status(200).json({ task });
    } catch (err) {
        return res.status(500).json({ error : err })
    }
}

const updateTask = async (req, res) => {
    try {
        const { id : taskId } = req.params;
        
        const task = await Task.findOneAndUpdate({ _id : taskId }, req.body, {
            new : true,
            runValidators : true
        });

        if( !task ){
            return res.status(404).json({ msg : `No task with id : ${taskID}` });
        }

        res.status(200).json({  })
    } catch (err) {
        return res.status(500).json({ error : err })
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id : taskID } = req.params;
        const task = await Task.findOneAndDelete({ _id : taskID })
        
        if( !task ){
            return res.status(404).json({ msg : `No task with id : ${taskID}` });
        }

        res.status(200).json({ task, msg : "The task was deleted" });
    } catch (err) {
        return res.status(500).json({ error : err })
    }
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}