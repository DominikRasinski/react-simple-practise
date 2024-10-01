import React, { useState } from 'react';

function Numbers() {
  const [numbers, setNumbers] = useState([1, 2]);

  const addToNumbers = () => {
    numbers.push(numbers.length);
    setNumbers(numbers);
  };

  return (
    <div className='App'>
      <div>{numbers.join(',')}</div>
      <button onClick={addToNumbers}>Add number</button>
    </div>
  );
}
