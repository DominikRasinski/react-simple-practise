// ts-ignore
import React, { useState } from "react";
import { LaboContainer } from "../components/laboContainer";
import { InsideContainers } from "../components/InsideContainers";
import Markdown from "react-markdown";
import { HighlighSyntax } from "../components/HighlighSyntax";
import { Buttons } from "../components/Buttons";

export function StaleStateLab() {
  const [count, setCount] = useState(0);
  const [countClick, setCountClick] = useState(0);

  const handleClick = () => {
    setCountClick((prev) => prev + 1);
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  };

  const staleStateCode = `
   setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  `;

  const fixStaleStateCode = `
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  `;

  return (
    <>
      <LaboContainer>
        <InsideContainers type="toLeft">
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
        </InsideContainers>

        <div>
          <p>Count: {count}</p>
          <Buttons onClick={handleClick}>Increment</Buttons>
          <p>Count click: {countClick}</p>
        </div>
      </LaboContainer>
      <LaboContainer>
        <InsideContainers type="toLeft">
          <p>
            <Markdown>
              Błąd ten jest spowodowany przez zjawisko **Stale State** co
              sprowadza się do tego, że state jaki jest wykorzystywany do
              aktualizacji jest z de synchronizowany z aktualnym stanem.
            </Markdown>
          </p>
        </InsideContainers>
        <Markdown>{`# Kod`}</Markdown>
        <HighlighSyntax codeString={staleStateCode} />
      </LaboContainer>
      <LaboContainer>
        <InsideContainers type="toLeft">
          <p>
            <Markdown>
              Aby pozbyć się błędu **Stale State** nie możemy korzystać z zmiennej stanu bezpośrednio,
              a zamiast warto skorzystać z funkcji, która zwraca aktualny stan.
            </Markdown>
            <ul>
              <li>
                <Markdown>
                Metodologia ta nazywa się **Functional Update** i jest to zalecane podejście.
                </Markdown>
              </li>
            </ul>
          </p>
        </InsideContainers>
        <HighlighSyntax codeString={fixStaleStateCode} />
      </LaboContainer>
    </>
  );
}
