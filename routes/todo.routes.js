const express = require('express');
const router = express.Router();

const {requireAuth} = require('../middlewares/auth.middleware');

const todoController = require('../controllers/todo.controller');

router.post('/addTodo',todoController.addTodo);

module.exports = router;