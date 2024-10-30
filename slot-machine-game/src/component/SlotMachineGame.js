import React, { useState } from 'react';
import './SlotMachineGame.css';

const SlotM = ({ x, y, z }) => {
  const isMatching = (x === y) && (y === z);
  return (
    <div className='slot_inner'>
      <h1>{x} {y} {z}</h1>
      <h1>{isMatching ? "This is Matching." : "This is Not Matching."}</h1>
    </div>
  );
};

const SlotMachineGame = () => {
  const [slots, setSlots] = useState({ x: 'A', y: 'A', z: 'A' });

  // Function to generate random alphabets
  const getRandomAlphabet = () => {
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabets[Math.floor(Math.random() * alphabets.length)];
  };

  // Function to generate random slots and update state
  const spinSlots = () => {
    setSlots({
      x: getRandomAlphabet(),
      y: getRandomAlphabet(),
      z: getRandomAlphabet(),
    });
  };

  return (
    <>
      <h2>
        Welcome to <span style={{ fontWeight: 'bold' }}>Slot Machine Game</span>
      </h2>
      <div className='slotMachine'>
        <SlotM x={slots.x} y={slots.y} z={slots.z} />
        <button className='spinButton' onClick={spinSlots}>Spin</button>
      </div>
    </>
  );
};

export default SlotMachineGame;
