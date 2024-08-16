require('dotenv').config();
const express = require('express');
const connectDB = require('./utils/db');
const authRoutes = require('./routes/auth.routes');
const todoRoutes = require('./routes/todo.routes');
const cookieParser = require('cookie-parser');

const Todo = require('./models/todo.models');
const {requireAuth} = require('./middlewares/auth.middleware');


const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRoutes);
app.use('/api/todo',todoRoutes);


connectDB().then(() => {
    app.listen(process.env.PORT, function() {
        console.log('Server started on port 3000');
    });
}).catch((e) => {
    console.log('Failed to start server:', e);
});



