import React from 'react'
import Task from './Task'

function Tasks({tasks, onDelete, onToggle}) {

  return (
    <>
    {
      // di spread task nya jadi lebih simple 
      tasks.map((task) => <Task key={task.id} {...task} onDelete={onDelete} onToggle={onToggle}/>)
    }
    </>
  )
}

export default Tasks