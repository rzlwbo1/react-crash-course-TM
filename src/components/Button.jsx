import React from 'react'
import PropTypes from 'prop-types';

function Button({text, color, onClickShow}) {

  return (
    <button style={{backgroundColor: color,}} className='btn' onClick={onClickShow}>{text}</button>
  )
}

Button.defaultProps = {
  color: "black" 
}

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  // onClick: PropTypes.func.isRequired,
}

export default Button