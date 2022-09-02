import React from 'react'
import Task from './Task'

function Tasks({tasks}) {

  return (
    <>
    {
      // di spread task nya jadi lebih simple 
      tasks.map((task) => <Task key={task.id} {...task}/>)
    }
    </>
  )
}

export default Tasks