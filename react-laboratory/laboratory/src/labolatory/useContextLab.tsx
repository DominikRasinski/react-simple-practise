import { LaboContainer } from "../components/laboContainer";
import { InsideContainers } from "../components/InsideContainers";
import { HighlighSyntax } from "../components/HighlighSyntax";
import React, { Children, createContext, ReactNode, useContext } from "react";

type Theme = "light" | "dark" | null;

const ThemeContext = createContext<Theme>(null);

const codeExample = `
  const value = useContext(SomeContext)
`;

const codeExample2 = `
import { useContext } from 'react';

function MyComponent() {
  const theme = useContext(ThemeContext);
  // ...
`;

const codeExample3 = `
  import { useContext } from 'react';

function Button() {
  const theme = useContext(ThemeContext);
  // ...
`;

const codeExample4 = `
function MyPage() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  );
}

function Form() {
  // ... renders buttons inside ...
}`;

export const UseContextLab = () => {
  return (
    <>
      <LaboContainer>
        <InsideContainers type="toLeft">
          <div>
            UseContext jest specjalnym hookiem który pozwala na
            subskrypcję/obserwację context'u znajdującego się w komponencie, aby
            móc zasubskrybować kontekst komponentu najpierw należy stworzyć
            kontekst za pomocą createContext
          </div>
          <HighlighSyntax codeString={codeExample} />
          <div>
            Hook useContext musi był wywoływany na samym początku komponentu,
            aby mieć możliwość subskrypcji do kontekstu jaki znajduje się w
            komponencie
          </div>
          <HighlighSyntax codeString={codeExample2} />
        </InsideContainers>
      </LaboContainer>
      <LaboContainer>
        <InsideContainers type="centered">
          <h3>Użycie</h3>
          <div>
            Hook useContext jest używany w szczególności kiedy chcemy glęboko w
            drzewie przekazać wartości, a nie chcemy wykonywać prop drilingu ani
            komponent konposition
          </div>
          <HighlighSyntax codeString={codeExample3} />
          <div>
            useContext zwraca wartość kontekstu, którą przekazaliśmy do
            createContext, jeżeli nie znajdzie kontekstu to zwróci wartość
            domyślną. React przeszukuje drzewo komponentów w poszukiwaniu
            najbliższego context provuder'a
          </div>
          <div>
            Aby przekazać context do na przykład `Button` komponentu, musimy
            opakować go lub jego rodzica w `Context.Provider`
          </div>
          <HighlighSyntax codeString={codeExample4} />
        </InsideContainers>
      </LaboContainer>
      <LaboContainer>
        <ThemeContext.Provider value="dark">
          <Form />
        </ThemeContext.Provider>
      </LaboContainer>
    </>
  );
};

const Form = () => {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log In</Button>
    </Panel>
  );
};

interface PanelProps {
  title: string;
  children: ReactNode;
}

const Panel = ({ title, children }: PanelProps) => {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;
  return (
    <div className={className}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return <button className={className}>{children}</button>;
};
