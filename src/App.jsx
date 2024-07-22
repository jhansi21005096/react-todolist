import { useState } from 'react'
import './App.css'

function App (){

  const[toDoList, setToDoList] = useState([]);
  const[toDo, setToDo] = useState("");

  const handleToDolist =() =>{
    if(toDoList.includes(toDo)){
      alert("Task exists")
    }else{
    setToDoList([...toDoList, toDo]);
    console.log(toDoList)
    }

  };

 
  const handlecloseTask=(e)=>{
    if(confirm("Do you want to delete this task")){
      console.log(e.target.id);
      let temp = toDoList.filter((v,i) => i !== parseInt(e.target.id));
      setToDoList(temp);
    }
  }
  return (
    <>
    <h1>To do list</h1>
    <input type="text" onChange={(e) => setToDo(e.target.value)} placeholder='task name:' />
    <button onClick={handleToDolist}>Add Task</button>  

    <br /><br />

    {

      toDoList.length > 0 && toDoList.map((v,i) =>{
        return(
          <div key={i}>
            <span>{v}</span>
            <span><></><button id={i} onClick={handlecloseTask}>x</button></span>
          </div>
        )
      })
    }
    </> 
  )
}

export default App