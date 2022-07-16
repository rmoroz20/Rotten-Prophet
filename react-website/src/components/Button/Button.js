import React from 'react';
import './Button.css';

const Button = ({functionName = "blue",name = "name"}) => {
    return(
        <div className="button-container">
            <button onClick={functionName}> {name}</button>
        </div>
    )
}

export default Button;