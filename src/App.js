import { React, useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import FormAdd from "./components/FormAdd";
import "./style.css";

function App() {

  const [showAdd, setShowAdd] = useState(false);

  const [tasks, setTasks] = useState([]);


  // working with API
  // jdi useEffect biasanya digunain buat ambil data dari server, dan masukan ke state, pastikan data nya berupa json agar mudah di olah
  useEffect(() => {

    async function getTasksApi() {
      const tasksFromServer = await fetchData()

      // tetep masukan ke state walaupun pake useEffect
      setTasks(tasksFromServer)
    }

    getTasksApi();

  }, [])


  // pisahkan fetch dengan use effect
  async function fetchData() {
    const res = await fetch('http://localhost:3004/tasks');
    const data = await res.json();

    return data;
  }



  // Delete task
  async function deleteTask(id) {
    let conf = window.confirm("Sure to delete??");

    // cara update state dengan use state, beda dengan class comp
    if(conf) {

      // deelte di server
      await fetch(`http://localhost:3004/tasks/${id}`, {
        method: 'DELETE'
      });

      // delete di state
      setTasks(tasks.filter((task) => task.id !== id))

    } else {
      setTasks(tasks);
    }

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

    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          // disini spread task yg sesuai dgn if dan merubah juga reminder nya
          return {
            ...task,
            reminder: !task.reminder,
          };
        } else {
          return task;
        }
      })
    );
  }

  // Form add
  async function addTask(data) {

    ////// Code ini sebelum pake backend json-server /////

    // const generateId = +new Date();
    // const newTask = { id: generateId, ...data };
    // setTasks([...tasks, newTask]);


    // ketika pake backend untuk post data
    const result = await fetch('http://localhost:3004/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })


    // jangan lupa masukan ke state juga, await jgn lupaa, kan promise nih
    const newTask = await result.json();
    console.log(result)
    setTasks([...tasks, newTask])
    
  }

  return (
    <div className="container">
      <Header onShow={() => setShowAdd(!showAdd)} changeText={showAdd} />

      {/* && itu merupakan logika yang gamau ada else nya, jadi dipastikan harus true */}
      {showAdd && <FormAdd onAdd={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <p>No Tasks. please Add Task</p>
      )}
    </div>
  );
}

export default App;
