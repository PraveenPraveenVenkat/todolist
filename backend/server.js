const express = require('express');
// const dotenv = require("dotenv").config();
const app = express();
app.use(express.json());

// Sample in-memory storage for todo items
let todos = [];

// Create a new todo item
app.post('/todos', (req, res) => {
    const { title, description } = req.body; // Use req.body, not res.body
//     if (!title || !description) {
//         return res.status(400).json({ error: 'Title and description are required.' });
//     }
    const newTodo = {
        id: todos.length + 1,
        title,
        description
    };
    todos.push(newTodo); // Push newTodo, not newTodos
    console.log(todos);
    res.status(201).json(newTodo);
});
const todoScheema =new mongoose.Schma({
    
})
// Get All items
app.get('/todos',(req,res)=>{
     res.json(todos);
})

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`); // Simplify log message
});


 