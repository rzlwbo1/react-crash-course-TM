import {React, useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import './style.css'


function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Lorem Ipsum Dolor",
      day: "Feb 5th at 2:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "Lorem Ipsum Dolor Sit ",
      day: "Feb 6th at 2:30pm",
      reminder: true
    },
    {
      id: 3,
      text: "Lorem Ipsum Dolor Sit Amet",
      day: "Feb 7th at 2:30pm",
      reminder: false
    }
  ])

  
  // Delete task
  function deleteTask(id) {

    // cara update state dengan use state agak beda dgn class
    setTasks(tasks.filter((task) => task.id !== id));

    // kalo mau ambil prev state gmnaa? ya pangggil aja nama variabel nya
    // ex
    // setCount(count + 1);

  }

  return (
    <div className='container'>
      <Header />
      {
        tasks.length > 0 ? 
        <Tasks tasks={tasks} onDelete={deleteTask} />
        :
        <p>No Tasks. please Add Task</p>
      }
    </div>
  )
}

export default App