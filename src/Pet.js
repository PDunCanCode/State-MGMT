import React from 'react';


const Pet = () => {
  return (
      <div>
          <h1>{name}</h1>
          <h2>{animal}</h2>
          <h2>{breed}</h2>
      </div>
  )
};

export default function Pet({ name, animal, breed })