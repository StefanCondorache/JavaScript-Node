
const getAllTasks = (req, res) => {
    res.json('all items from the file')
}

const createTask = (req, res) => {
    res.json(req.body);
}

const getTask = (req, res) => {
    res.json({ id : req.params.id, msg : "get single task" });
}

const updateTask = (req, res) => {
    res.json({ id : req.params.id, msg : 'update task'});
}

const deleteTask = (req, res) => {
    res.json({ id : req.params.id, msg : 'delete task'});
}
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}