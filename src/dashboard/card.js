import React, {Fragment} from 'react';

const Card = ({logo, text, onClick, value, name, color }) => (
  <Fragment>
  <div className="logo">{logo}</div>
  <button className="card" onClick={onClick} value={value} name={name} style={{backgroundColor: color}}>
      <div className="text">{text}</div>
  </button>
  </Fragment>
);
export default Card;