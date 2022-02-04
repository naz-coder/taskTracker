import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}


// class App extends React.Component{
//   render (){
//     return <h1>Hello from here</h1>
//   }
// }

export default App;
