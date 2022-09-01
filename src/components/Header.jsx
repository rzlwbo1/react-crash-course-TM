import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button';

function Header({title}) {

  // console.log(props)

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={"coral"} text={"Add"}/>
    </header>
  )
}

// bisa add default props
Header.defaultProps = {
  title: "Task Tracker",
  name: "Ijall"
}


// Type Checking, lebih bagus pake typescript
Header.propTypes = {
  title: PropTypes.string.isRequired,
}


// styling components
const headingStyle = {
  color: "white",
  backgroundColor: "lightblue", 
}


export default Header