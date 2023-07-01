import './App.css';
import { useState } from 'react';
import Display from './component/Display';
function App() {

  const [tasks, setTasks] = useState([])

  const addTask = (value) => {
    setTasks([...tasks, {text:value,done:false}])
  }

  const [oneTask, setOneTask] = useState("")

  const handleInput = (e) =>{
      e.preventDefault();
      addTask(oneTask);
      setOneTask("");
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter( (t,idx) => idx !== id ))
  }

  const updateTask = (id) => {
    const newTask = tasks
    newTask[id].done= !newTask[id].done
    setTasks(newTask)
  }

  return (
    <div className="App">
      <form onSubmit={(e)=>{handleInput(e)}}>
        <input onChange={(e)=>{setOneTask(e.target.value)}} value={oneTask} />
        <button>Add</button>
      </form>
      <br />
      {tasks.map((task, index)=>{
        return <Display task={task} index={index} deleteTask={deleteTask} updateTask={updateTask} />
      })}
      
    </div>
  );
}

export default App;