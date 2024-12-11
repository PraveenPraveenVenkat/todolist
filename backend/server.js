const express = require('express');
const mongoose =require('mongoose');

const app = express();
app.use(express.json());

// *Sample in-memory storage for todo items
// let todos = [];


// !Connecting Mongoose
mongoose.connect('mongodb+srv://user1:Praveen1@cluster0.qjs8w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('DB Connected')
})
.catch((error)=>{
    console.log(error)
})

//? Creating Scheema
const todoScheema = new mongoose.Schema({
    title:String,
    description:String
    
})
//*Creating Model
const todomodel =mongoose.model('todo',todoScheema);
// !DotNot alert
//* Should NodeIterator
// TODO :Implement the process
//? Should NodeIterator
app.post('/todos',async (req, res) => {
    const { title, description } = req.body;  // 
    // const newTodo = {
    //     id: todos.length + 1,
    //     title,
    //     description
    // };
    // todos.push(newTodo); //* Push newTodo, not newTodos
    // console.log(todos);
try {
    const newTodo =new todoModel({title,description});
    await   newTodo.save();
    res.status(201).json(newTodo);
} catch (error) {
    console.log(error)
    res.status(500).json({message:error.message});
}
     

})

// *Get All items
app.get('/todos',async(req,res)=>{
try{
const todos = await todoModel.find();
 res.json(todos);
}catch(error){

    console.log(error)
    res.status(500).json({message:error.message});

}
    
})


// !Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`); // Simplify log message
});


 