import React from "react";
import './Card.css';

const Card = ({contents = "nothing"}) => {
  return (
    <div>
        <h1>{contents}</h1>
    </div>
  );
};

export default Card;