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

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  )
}

export default App