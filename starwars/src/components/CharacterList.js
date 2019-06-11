import React from 'react';
import './StarWars.css';

import Character from './Character';

const CharacterList = props => {
  return (
    <div className='container'>
      {props.swItem.map((item, index) => 
      <Character 
        swItem={item} 
        key={index}
      />)}
    </div>
  );
}; 




export default CharacterList;