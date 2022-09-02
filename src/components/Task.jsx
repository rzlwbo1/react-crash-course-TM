import React from 'react'
import {BsFillXSquareFill} from 'react-icons/bs';

function Task({text, day}) {
  return (
    <div className='task'>
      {/* karna di spread jadinya bisa langsung ambl properti obj nya */}
      <h3>{text} <BsFillXSquareFill color='red'/></h3>
      <p>{day}</p>
    </div>
  )
}

export default Task