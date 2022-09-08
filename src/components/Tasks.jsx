import React from 'react'
import Task from './Task'

function Tasks({tasks, onDelete}) {

  return (
    <>
    {
      // di spread task nya jadi lebih simple 
      tasks.map((task) => <Task key={task.id} {...task} onDelete={onDelete}/>)
    }
    </>
  )
}

export default Tasks