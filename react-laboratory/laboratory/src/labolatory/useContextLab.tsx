import { LaboContainer } from "../components/laboContainer";
import { InsideContainers } from "../components/InsideContainers";
import { HighlighSyntax } from "../components/HighlighSyntax";

const codeExample = `
  const value = useContext(SomeContext)
`;

export const UseContextLab = () => {
  return (
    <LaboContainer>
      <InsideContainers type="toLeft">
        <div>
          UseContext jest specjalnym hookiem który pozwala na
          subskrypcję/obserwację context'u znajdującego się w komponencie, aby móc zasubskrybować kontekst komponentu najpierw należy stworzyć kontekst za pomocą createContext
        </div>
        <HighlighSyntax codeString={codeExample} />
      </InsideContainers>
    </LaboContainer>
  );
};
