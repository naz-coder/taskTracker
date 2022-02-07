import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState (false)
  const[tasks, setTasks] = useState([
  {
      id: 1,
      text: 'Do the Laundary',
      day: 'Feb 4th at 1:00pm',
      reminder: true,
  },
  {
      id: 2,
      text: 'Grocery Shopping',
      day: 'Feb 6th at 1:49pm',
      reminder: true,
  },
  {
      id: 3,
      text: 'Hair Saloon Appointment',
      day: 'Feb 8th at 12:30pm',
      reminder: false,
  },
  ])


  // -------> Add Task <------
  const addTask = (task) => {
    const id= Math.floor(Math.random()*
    10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
    

  }

  // -------> Delete Task <------
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>task.id !== id))
  }

    // -------> Toggle Reminder <------
  const toggleReminder =(id)=>{
    setTasks(
      tasks.map((task)=>
      task.id===id?{...task, reminder: 
      !task.reminder}:task
    )
  )
}

  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask
        (!showAddTask)} showAdd={showAddTask}/>
      {showAddTask&&<AddTask  onAdd={addTask}/>}
      {tasks.length>0?(<Tasks tasks={tasks} onDelete=
      {deleteTask} onToggle={toggleReminder}/>
      ):(
        'No Tasks to Show!')}
    </div>
  );
}


// class App extends React.Component{
//   render (){
//     return <h1>Hello from here</h1>
//   }
// }

export default App;
