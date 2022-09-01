import {React, useState} from 'react'


function Task() {

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
    <>
    {
      tasks.map((task) => <p key={task.id}>{task.text}</p>)
    }
    </>
  )
}

export default Task