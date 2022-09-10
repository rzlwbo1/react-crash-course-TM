import {React, useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import FormAdd from './components/FormAdd'
import './style.css'


function App() {

  const [showAdd, setShowAdd] = useState(false);

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

    let conf = window.confirm("Sure to delete??");
    
    // cara update state dengan use state agak beda dgn class
    conf ? 
    setTasks(tasks.filter((task) => task.id !== id)) :
    setTasks(tasks);

    // =============

    // kalo mau ambil prev state gmnaa? ya pangggil aja nama variabel nya
    // ex
    // setCount(count + 1);

  }

  // reminder task
  function toggleReminder(id) {

    // jadi ini cara bacanya adalah, jika id sama dgn id yg di dbclick, maka
    // menghasilkan array of obj dgn task yg ada dan reminder yg bersangkutan di NOT (!)
    // jika tidak maka task nya ga berubah.

    setTasks(tasks.map((task) => {

      if(task.id === id) {
        // disini spread task yg sesuai dgn if dan merubah juga reminder nya
        return {
          ...task,
          reminder: !task.reminder
        }
      } else {
        return task
      }

    }))

  }

  return (
    <div className='container'>
      <Header onShow={() => setShowAdd(!showAdd)} changeText={showAdd} />

      {/* && itu merupakan logika yang gamau ada else nya, jadi dipastikan harus true */}       
      {
        showAdd && <FormAdd />
      }

      {
        tasks.length > 0 ? 
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        :
        <p>No Tasks. please Add Task</p>
      }
    </div>
  )
}

export default App