import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

type HighlighSyntaxProps = {
  codeString: string | string[];
};

export function HighlighSyntax(props: HighlighSyntaxProps) {
  const { codeString } = props;

  return (
    <SyntaxHighlighter language="tsx" style={materialDark}>
      {codeString}
    </SyntaxHighlighter>
  );
}
