import React from 'react';

const Character = props => {
  return (
    <div className="character-list">
      <h3>Name: {props.swItem.name}</h3>
      <p>Hair Color: {props.swItem.hair_color}</p>
      <p>Eye Color: {props.swItem.eye_color}</p>
      <p>Gender: {props.swItem.gender}</p>
      <p>Birth Year: {props.swItem.birth_year}</p>
    </div>
  );
};

export default Character;