const express =require('express');
// const  dotenv =require ("dotenv").config();
const app =express ();


app.get ('/',(req,res)=>{
     res.send("Hello World");
})
// Start the Server
const port= 3000;
// const port =3000;
app.listen(port, () =>{
  
     console.log('Server running on port port'+port);
})





