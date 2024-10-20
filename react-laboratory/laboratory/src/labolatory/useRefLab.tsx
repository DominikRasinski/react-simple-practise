import { useRef } from "react";
import { LaboContainer } from "../components/laboContainer";
import { InsideContainers } from "../components/InsideContainers";
import { Buttons } from "../components/Buttons";
import Markdown from "react-markdown";
import { HighlighSyntax } from "../components/HighlighSyntax";

export const UseRefLab = () => {
  const ref = useRef(0);

  const handleClick = () => {
    ref.current = ref.current + 1;
    console.log(ref.current);
  };

  const useRefCode = `
  const ref = useRef(0);

  const handleClick = () => {
    ref.current = ref.current + 1;
    console.log(ref.current);
  };
  `;

  return (
    <>
      <LaboContainer>
        <InsideContainers type="toLeft">
          <h1 className="font-bold text-[30px] py-2">useRef Lab</h1>
          <Markdown>
            Hook useRef jest służy do zapamiętywania danych bez potrzeby
            re-render'u komponentu. Możemy do tego zaliczyć takie dane jak
            wewnętrzne id przycisku jaki klient wcisnął. Takie dane nie są
            potrzebne klientowi do wyświetlenia w aktualnym komponencie co
            przyczynia się do tego, że nie ma potrzeby aby aktualny komponent
            przeszedł re-render, ale mogą być potrzebne w dalszej logice
            aplikacji.
          </Markdown>
        </InsideContainers>
      </LaboContainer>
      <LaboContainer>
        <InsideContainers type="centered">
          <h2 className="font-bold text-[25px] py-2">
            Przykład użycia hook'a useRef
          </h2>
          <Buttons onClick={handleClick}>Kliknij</Buttons>
          <p className="py-2">Kliknięto {ref.current} razy</p>
          <p>
            Napis 'Kliknięto' nie ulegnie zmianie ponieważ stan komponentu nie
            uległ zmianie, ale za to zostanie jego wartość wyświetlona w konsoli
          </p>
        </InsideContainers>
      </LaboContainer>
      <LaboContainer>
        <InsideContainers type="centered">
          <Markdown>{`# Przykład kodu powyżej`}</Markdown>
          <HighlighSyntax codeString={useRefCode} />
        </InsideContainers>
      </LaboContainer>
    </>
  );
};
