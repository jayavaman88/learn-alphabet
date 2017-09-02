import React from 'react';

import './styles.css';

const AlphabetCard = (props) => {
  return (
    <div className={`card ${props.className}`} onClick={props.handleClick}>
      <span className="alphabet">{props.alphabet}</span>
    </div>
  )
}

export default AlphabetCard;
