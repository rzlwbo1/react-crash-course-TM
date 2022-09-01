import React from 'react'
import PropTypes from 'prop-types';

function Button({text, color}) {
  return (
    <button style={{backgroundColor: color,}} className='btn'>{text}</button>
  )
}

Button.defaultProps = {
  color: "black" 
}

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired
}

export default Button