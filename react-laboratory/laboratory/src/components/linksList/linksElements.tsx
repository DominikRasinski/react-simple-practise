import { NavLink } from "react-router-dom";

export const LinksElements = () => {
  return (
    <>
      <ol className="list-decimal underline">
        <li className="py-2">
          <NavLink to="/useStateLab">useState Lab</NavLink>
        </li>
        <li className="py-2">
          <NavLink to="/staleStateLab">Stale State Lab</NavLink>
        </li>
        <li className="py-2">
          <NavLink to="/useEffectLab">useEffect Lab</NavLink>
        </li>
        <li className="py-2">
          <NavLink to="/useRefLab">useRef Lab</NavLink>
        </li>
        <li className="py-2">
          <NavLink to="/useReducerLab">useReducer Lab</NavLink>
        </li>
        <li className="py-2">
          <NavLink to="/useContextLab">useContext Lab</NavLink>
        </li>
        <li className="py-2">
          <NavLink to="/reduxLab">Redux Lab</NavLink>
        </li>
      </ol>
    </>
  );
};
