import React from 'react'

function Task({tasks}) {

  return (
    <>
    {
      tasks.map((task) => <p key={task.id}>{task.text}</p>)
    }
    </>
  )
}

export default Task