import {useState,useEffect} from 'react';


const Header = () => {
  const [title,setTitle] =useState ("");
  const [Description, setDescription] = useState ("");
  const [todos, setTodos] = useState ([])
  const [error, setError]  = useState([])
  const [message, setMessage] = useState([])
  const apiurl = "http://localhost:3000"

  const  handleSubmit = () => {
    setError("")
    if (title.trim () !== ''  && Description.trim()!==  ''){
      fetch (apiurl + "/todos",{
        method:"POST" ,
         headers :{
          'Content-type' :'application/json'
         },
         body :JSON.stringify({title,description})
      }).then ((res)=>{
        if(res.ok){
            //Added items to the List 
         setTodos ([...todos,{title,description}]);
         setMessage ("Item Added Successfully");
        }else {
          //Set Error
       setError ("Unable To Create ToDo List");
        }
        
      })
      .catch(()=>setError("Network Error"));
    }else{
      setError("Title And Description Required")
    }
       
  }
  useEffect(()=>{
  getItems()
  },[])

  const getItems=()=>{
    fetch(apiurl+"/todos")
    .then((res)=> res.json())
    .then((res)=>{
      setTodos(res)
    })
  }
  
  return (
    <>
    <div className="text-white text-4xl p-6 bg-cyan-700 font-bold">

      <h1 >ToDo List</h1>
          </div>

          <div>
            <h3 className='font-bold text-2xl mt-5  text-left'>Add  Items</h3>


           {message && <p className='text-green'>{message}</p>}

           

</div>
<div className='flex-items items-start  grid gap-4 grid-cols-3  mt-7  '>
           <input type="text"className='border-2 rounded-lg' onChange={(e)=> setTitle (e.target.value)} value={title} placeholder="Title "/> 

           <input type="Description" className='border-2 rounded-lg' onChange={(e)=> setDescription (e.target.value)} value={Description} placeholder="Description " /> 

            <button className='bg-black text-white  text-center ml-24 rounded-full' onClick={handleSubmit}>Submmit</button>
            </div>

            <h3 className='font-bold  text-2xl mt-5  text-left'>Tasks</h3>
            <ul>
              {
                todos.map((items)=>     <li className='flex-items items-start border-red-400 bg-cyan-500 grid gap-4 grid-cols-2 mt-4 pt-6 '>
                <div>
                <span className='text-left '>{Item.title}</span>
                <span className='text-left '>{items.description}</span>
                </div>
                

                 <div>
                 <button className='bg-amber-400 rounded-lg >
                  ' >Edit</button>
                 <button className='bg-red-600 rounded-lg gap-36  '>Delete</button>
                 </div>
                 </li>
               

              )
                }
             
               
            </ul>
          
          <div>
            
   {error &&<p className='className='text-red>{error}</p>}
</div>
            </>
);
}

export default Header;