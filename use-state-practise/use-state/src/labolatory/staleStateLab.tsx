import React, { useState } from 'react';
import { LaboContainer } from '../components/laboContainer';

export function StaleStateLab() {
  const [numbers, setNumbers] = useState([1, 2]);

  const addToNumbers = () => {
    numbers.push(numbers.length);
    setNumbers(numbers);
  };

  return (
    <>
      <LaboContainer>
        <div>{numbers.join(',')}</div>
        <button onClick={addToNumbers}>Add number</button>
      </LaboContainer>
    </>
  );
}
