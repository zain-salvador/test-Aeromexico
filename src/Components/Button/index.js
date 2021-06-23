import React from 'react'
import './button.css'
const Button = ({name, handleFilter}) =>{
    return(
        <button onClick={()=>handleFilter()}
            className="bx-button">
           {name}
        </button>
    )
}

export default Button