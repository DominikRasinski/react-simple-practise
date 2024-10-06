import React, { useState } from 'react';
import Markdown from 'react-markdown';
import { LaboContainer } from '../components/laboContainer';

const UseStateLab: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <LaboContainer>
        <p>You clicked {count} times</p>
        <button onClick={handleClick}>Click me</button>
      </LaboContainer>
      <LaboContainer>
        <Markdown>{`# Hook useState`}</Markdown>
        <Markdown>{`Służy do obsługi stanu jaki zapisujemy po stronie **klienta**`}</Markdown>
      </LaboContainer>
    </>
  );
};

export default UseStateLab;
