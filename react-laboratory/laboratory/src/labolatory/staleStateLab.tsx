// ts-ignore
import React, { useState } from 'react';
import { LaboContainer } from '../components/laboContainer';
import Markdown from 'react-markdown';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-markdown';

export function StaleStateLab() {
  const [count, setCount] = useState(0);
  const [countClick, setCountClick] = useState(0);

  const handleClick = () => {
    setCountClick((prev) => prev + 1);
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  };

  return (
    <>
      <LaboContainer>
        <div className='flex items-start flex-col text-start p-4 max-w-[1000px]'>
          <h1>Stale State Lab</h1>
          <p>
            <Markdown>
              Zachowanie stale state polega na tym, że useState operuje na
              przestarzałych danych podlega **desynchronizacji**.
            </Markdown>
          </p>
          <p>
            <Markdown>
              Jeżeli klikniemy w przycisk **Increment** to zauważymy, że wartość
              **Count** zostanie zwiększona poprawnie, ale gdy zaczniemy w
              krótkim czasie dużo naciskać razy w przycisk to nastąpi
              desynchronizacja
            </Markdown>
          </p>
        </div>

        <div>
          <p>Count: {count}</p>
          <button
            onClick={handleClick}
            className='bg-red-500 rounded-lg p-2'>
            Increment
          </button>
          <p>Count click: {countClick}</p>
        </div>
      </LaboContainer>
      <LaboContainer>
        <div className='flex items-start flex-col text-start p-4 max-w-[1000px]'>
          <p>
            <Markdown>
              Błąd ten jest spowodowany przez zjawisko **Stale State** co
              sprowadza się do tego, że state jaki jest wykorzystywany do
              aktualizacji jest z desynchronizowany z aktualnym stanem.
            </Markdown>
          </p>
        </div>
        <Markdown>{`# Kod`}</Markdown>
      </LaboContainer>
    </>
  );
}
