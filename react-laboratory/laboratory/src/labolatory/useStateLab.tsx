import React, { useState } from 'react';
import Markdown from 'react-markdown';
import { LaboContainer } from '../components/laboContainer';
import { Buttons } from '../components/Buttons';
import { InsideContainers } from '../components/InsideContainers';
import { HighlighSyntax } from '../components/HighlighSyntax';

const UseStateLab: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const useStateCode = `
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  `;

  return (
    <>
      <LaboContainer>
        <p>You clicked {count} times</p>
        <Buttons onClick={handleClick}>Click me</Buttons>
        <InsideContainers type="centered">
          <Markdown>{`# Przykład kodu powyżej`}</Markdown>
          <HighlighSyntax codeString={useStateCode} />
        </InsideContainers>
      </LaboContainer>
      <LaboContainer>
        <InsideContainers type="toLeft">
          <Markdown>{`# Hook useState`}</Markdown>
          <Markdown>{`Służy do obsługi stanu jaki zapisujemy po stronie **klienta**`}</Markdown>
        </InsideContainers>
      </LaboContainer>
      <LaboContainer>
        <InsideContainers type="centered">
          <Markdown>{`# **Ważne**`}</Markdown>
          <Markdown>{`Hook useState przy każdej aktualizacji stanu wywołuję re-render całego komponentu w którym został wykorzystany.
          Co może powodować nieskończone re-rendery, co również doprowadzi to do błędu aplikacji ponieważ react jest wyczulony aby komponenty nie były przebudowywane w nieskończoność`}
          </Markdown>
        </InsideContainers>
      </LaboContainer>
    </>
  );
};

export default UseStateLab;
