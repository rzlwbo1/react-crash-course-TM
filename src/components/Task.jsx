import React from 'react'
import {BsFillXSquareFill} from 'react-icons/bs';

function Task({text, day, id, reminder, onDelete, onToggle}) {
  return (
    <div className={`task ${reminder ? 'reminder': ''}`} onDoubleClick={() => onToggle(id)}>
      {/* karna di spread jadinya bisa langsung ambl properti obj nya */}
      <h3>{text} <BsFillXSquareFill color='red' onClick={() => onDelete(id)}/></h3>
      <p>{day}</p>
    </div>
  )
}

export default Task