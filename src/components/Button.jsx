import React from 'react'
import './Button.css'

const ButtonsCal = ({ info, click, className }) => (
  <button className={className} onClick={click} type="button">
    {info}
  </button>
)

export default ButtonsCal
