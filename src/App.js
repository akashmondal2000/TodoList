// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';


const App = () => { 
  
  const [showAddTask, setShowAddTask] = useState (false)

  const [tasks, setTasks] = useState([
    {
        id : 1,
        text:'Java Class',
        day : '15th september 5:00 pm',
        remainder :true,
    },
    {
        id : 2,
        text:'College ppt Submission',
        day : '22 september at 1:00pm',
        remainder :false,
    },
    {
        id : 3,
        text:'React js learning',
        day : 'Everyday 10:00am',
        remainder :true,
    }
])

// Add Task
const addTask = (task)=>{
  const id = Math.floor(Math.random() * 10000) + 1;

  const newTask = {id , ...task};

  setTasks([...tasks, newTask])
}

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id))
}

//Toggle Remainder
const toggleReminder = (id) => {
  setTasks (tasks.map((task) => 
  task.id === id ? {...task, remainder :!task.remainder} : task))
}

  return (
    <div className="container">
    <Header onAdd = {() => setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>

    {showAddTask && <AddTask onAdd = {addTask}/>}

    {tasks.length > 0 ? (<Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/>) : ('No Task')}
    </div>
  );
}

export default App;
