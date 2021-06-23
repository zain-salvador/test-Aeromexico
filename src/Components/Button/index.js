import React from 'react'
import './button.css'
const Button = ({name}) =>{
    return(
        <button className="bx-button">
           {name}
        </button>
    )
}

export default Button