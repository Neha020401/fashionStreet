import React from 'react'
import { Fragment } from 'react'
import "../components/SassStyling/Button.scss"

const Button_Type_Classes = {
    google:'google-sign-in',
    inverted:'inverted'
}


const Button = ({children, buttonType,...otherProps }) => {
  return (
    <Fragment>
      <button 
      className={
        `button-container 
        ${Button_Type_Classes[buttonType]}`} 
        {...otherProps}
      >{children}</button>
    </Fragment>
  )
}

export default Button;
