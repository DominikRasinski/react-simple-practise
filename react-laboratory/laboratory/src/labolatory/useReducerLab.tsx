import { useReducer } from "react";
import { LaboContainer } from "../components/laboContainer";
import { InsideContainers } from "../components/InsideContainers";
import { Buttons } from "../components/Buttons";
import Markdown from "react-markdown";
import { HighlighSyntax } from "../components/HighlighSyntax";

export const UseReducerLab = () => {
  return (
    <>
      <LaboContainer>
        <InsideContainers type="toLeft">
          <h1 className="font-bold text-[30px] py-2">useReducer Lab</h1>
          <p>
            <Markdown>
              useReducer to hook, który pozwala na zarządzanie stanem w bardziej
              złożonych przypadkach.
            </Markdown>
          </p>
          <p>
            <Markdown>
              useReducer przyjmuje dwa argumenty, pierwszy to funkcja reducer,
              która zawiera logikę zmiany stanu, a drugi to stan początkowy.
            </Markdown>
          </p>
        </InsideContainers>
      </LaboContainer>
    </>
  );
};
