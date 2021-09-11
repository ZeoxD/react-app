//import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
import Header from './Header';
import Tasks from './Tasks'
import AddTask from './AddTask';
import firebase from './firebase'; 
import Navbar from './Navbar';


const db = firebase.database();

function App() {

  const[showAddTask, setShowAddTask] = useState(false)
  
  const [tasks, setTasks] = useState([    
    {
      id:1,
      text: 'Going for Running',
      day: 'sunday',
      reminder: true,  
    },
    {
      id:2,
      text: 'Going for Swimming',
      day: 'monday',
      reminder: false,
    },
    {
      id:3, 
      text: 'Going for Movie',
      day: 'tuesday',
      reminder: false,
    },
    {
      id:4, 
      text: 'Going to Park',
      day: 'tuesday',
      reminder: true,
    }
  ])


  console.log(tasks);

  const zeoTasks = db.ref("react-task-tracker-cf4b4-default-rtdb");
  zeoTasks.push(JSON.stringify(tasks));

  const addTask = (task) => {
    const id = Math.floor(Math.random()*1000) + 1
    const newtask = { id, ...task }
    setTasks([...tasks, newtask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
      setTasks( tasks.map( (task) => 
          task.id === id ? { ...task, reminder: !task.reminder} : task
      ))
  }

  return (
    <div className="App">
      <Navbar onAdd={ () => setShowAddTask(!showAddTask) } showAdd={showAddTask}/>
      <div className="App-content">
        <Header/>
        { showAddTask && <AddTask onAdd={addTask}/> }
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      </div>
    </div>
  );
}

export default App;
