import { useEffect, useState } from "react";
import { LaboContainer } from "../components/laboContainer";
import { InsideContainers } from "../components/InsideContainers";
import Markdown from "react-markdown";
import { HighlighSyntax } from "../components/HighlighSyntax";

const DATA_URL = "http://localhost:8000/menu";

export const UseEffectLab = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const response = await fetch(DATA_URL);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        return setData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);
  return (
    <LaboContainer>
      <InsideContainers type="toLeft">
        <h1>UseEffect Lab</h1>
        <p>
          <Markdown>
            useEffect to hook, który pozwala na wykonywanie efektów ubocznych w
            funkcji komponentu.
          </Markdown>
        </p>
        <p>
          <Markdown>
            useEffect wykonuje się zaraz po renderowaniu komponentu, a także po
            każdym kolejnym renderowaniu.
          </Markdown>
        </p>
        <p>
          <Markdown>
            useEffect przyjmuje dwa argumenty, pierwszy to funkcja, która
            zawiera efekt uboczny, a drugi to tablica zależności, która określa,
            kiedy efekt ma być uruchomiony.
          </Markdown>
        </p>
      </InsideContainers>
      <InsideContainers type="toLeft">
        <h2>Menu</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {data.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </InsideContainers>
    </LaboContainer>
  );
};
