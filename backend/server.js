const express =require('express');
// const  dotenv =require ("dotenv").config();
const app =express ();
app.use(express.json())

// Sample in-memory Storage For Todos items
let todos = [];

//   Create a New Todo item
ap.post('/todos',(req,res)=>{
     const {title,description} =re.body;
     const newTodo ={
          id: todos.length +1,
          title,
          description
     };
     todos.push(newTodos);
     console.log(todos);
     re.status(201).json(newTodos);
})

// Start the Server
const port= 3000;
// const port =3000;
app.listen(port, () =>{
  
     console.log('Server running on port port'+port);
})





