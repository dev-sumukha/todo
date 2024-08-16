const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        createdBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },{timestamps: true}
);

const TodoSchema = mongoose.model('Todo',todoSchema);
module.exports = TodoSchema;