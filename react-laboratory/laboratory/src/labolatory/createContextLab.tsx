import {LaboContainer} from "../components/laboContainer";
import {InsideContainers} from "../components/InsideContainers";
import {HighlighSyntax} from "../components/HighlighSyntax";

const createContextExample = "const SomeContext = createContext(defaultValue)";

export const CreateContextLab = () => {
  return (
    <LaboContainer >
      <InsideContainers type={"toLeft"}>
        <div>
          Metoda createContext pozwala na utworzenie kontekstu, który później możemy subskrybować za pomocą komponentów, ale aby zasubskrybować kontekst musimy skorzystać z hook'a useContext
        </div>
        <HighlighSyntax codeString={createContextExample} />
      </InsideContainers>
    </LaboContainer>
  )
}