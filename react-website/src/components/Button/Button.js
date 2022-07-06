import React from 'react';
import './Button.css';

const Button = ({color = "blue",name = "name"}) => {
    return(
        <div className="button-container">
            <button className={`custom-button ${color}`}>{name}</button>
        </div>
    )
}

export default Button;