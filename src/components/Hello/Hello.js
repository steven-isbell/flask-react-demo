import React from 'react';
import Button from '../Button/Button';

const Hello = ({ name, getHello }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
      }}
    >
      Hello, {name}
      <Button handleClick={getHello}>Say Hello!</Button>
    </div>
  );
};

export default Hello;
