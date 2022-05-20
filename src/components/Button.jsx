import React from 'react'
import './Button.css'

const ButtonsCal = ({
  className, titleB, info, click,
}) => (
  <button className={className} title={titleB} onClick={click} type="button">
    {info}
  </button>
)

export default ButtonsCal
