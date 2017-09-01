import React from 'react';

import style from './styles.css';

const AlphabetCard = (props) => {
  return (
    <div className="card" onClick={props.handleClick}>
      <span className="alphabet">{props.alphabet}</span>
    </div>
  )
}

export default AlphabetCard;
