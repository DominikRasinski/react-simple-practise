import { LaboContainer } from "../components/laboContainer";
import { InsideContainers } from "../components/InsideContainers";
import { HighlighSyntax } from "../components/HighlighSyntax";

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
    </>
  );
};
