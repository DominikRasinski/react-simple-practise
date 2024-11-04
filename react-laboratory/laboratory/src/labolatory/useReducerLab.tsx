import { useReducer } from "react";
import { LaboContainer } from "../components/laboContainer";
import { InsideContainers } from "../components/InsideContainers";
import { Buttons } from "../components/Buttons";
import Markdown from "react-markdown";
import { HighlighSyntax } from "../components/HighlighSyntax";

type Action = {
  type: 'INCREMENT_AGE' | 'DECREMENT_AGE';
}

function reducer(state: any, action: Action): any {
 switch (action.type) {
   case 'INCREMENT_AGE':
     return {
       age: state.age + 1
     }
   case 'DECREMENT_AGE':
     return {
       age: state.age - 1
     }
   default:
     throw new Error('Unknown action')
 }
}

export const UseReducerLab = () => {

  const [state, dispatch] = useReducer(reducer, {age: 42})

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
      <LaboContainer>
        <InsideContainers type={"centered"} >
            <Buttons onClick={() => {
              dispatch({ type: 'INCREMENT_AGE' })
            }}>
              Increment age
            </Buttons>
            <Buttons onClick={() => {
              dispatch({ type: 'DECREMENT_AGE'})
            }}>
              Decrement age
            </Buttons>
            <p>Hello! You are {state.age}.</p>
        </InsideContainers>
      </LaboContainer>
    </>
  );
};
