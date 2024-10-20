import { NavLink } from "react-router-dom";
import { useEffect } from "react";

export const LinksList = () => {
  // useEffect(() => {
  //   async function fetchData() {
  //     const url = "http://localhost:8000/menu";
  //     try {
  //       const response = await fetch(url);
  //       if (!response.ok) {
  //         throw new Error(`Response status: ${response.status}`);
  //       }
  //       const json = await response.json();
  //       console.log(json);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchData();
  // }, []);

  return (
    <ol className="list-decimal underline ">
      <li>
        <NavLink to="/useStateLab">useState Lab</NavLink>
      </li>
      <li>
        <NavLink to="/staleStateLab">Stale State Lab</NavLink>
      </li>
      <li>
        <NavLink to="/useEffectLab">useEffect Lab</NavLink>
      </li>
      <li>
        <NavLink to="/useRefLab">useRef Lab</NavLink>
      </li>
      <li>
        <NavLink to="/useReducerLab">useReducer Lab</NavLink>
      </li>
      <li>
        <NavLink to="/useContextLab">useContext Lab</NavLink>
      </li>
      <li>
        <NavLink to="/reduxLab">Redux Lab</NavLink>
      </li>
    </ol>
  );
};
