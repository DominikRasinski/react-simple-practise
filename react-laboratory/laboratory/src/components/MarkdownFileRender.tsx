//TODO zastanowić się czy tego się nie pozbyć
import Markdown from "react-markdown";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const markdown = `Here is some JavaScript code:

~~~js
console.log('It works!')
~~~
`;

export const MarkdownFileRender = () => {
  return (
    <Markdown
      children={markdown}
      components={{
        code({ node, className, children, ref, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              {...props}
              style={materialDark}
              language={match[1]}
              PreTag="div"
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
  );
};
