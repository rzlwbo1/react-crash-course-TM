import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button';

function Header({title, onShow, changeText}) {

  // console.log(props)

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={changeText ? "crimson" : "limegreen"} text={changeText ? "Close": "Add"} onClickShow={onShow}/>
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