const Todo = require('../models/todo.models');
const User = require('../models/user.models');

module.exports.addTodo = async function(req,res){
    const { title,description } = req.body;

    const newTodo = new Todo({
        title,
        description,
        user: req.user._id // Set the user ID to the logged-in user
    });

    await newTodo.save();

    const user = await User.findById(req.user._id);
    user.tasks.push(newTask._id);
    await user.save();

    res.status(201).send(newTask);
}