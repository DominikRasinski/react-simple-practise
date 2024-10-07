import { NavLink } from 'react-router-dom';

export const LinksList = () => {
  return (
    <ol className='list-decimal underline '>
      <li>
        <NavLink to='/useStateLab'>useState Lab</NavLink>
      </li>
      <li>
        <NavLink to='/staleStateLab'>Stale State Lab</NavLink>
      </li>
      <li>
        <NavLink to='/useEffectLab'>useEffect Lab</NavLink>
      </li>
      <li>
        <NavLink to='/useRefLab'>useRef Lab</NavLink>
      </li>
      <li>
        <NavLink to='/useReducerLab'>useReducer Lab</NavLink>
      </li>
      <li>
        <NavLink to='/useContextLab'>useContext Lab</NavLink>
      </li>
      <li>
        <NavLink to='/reduxLab'>Redux Lab</NavLink>
      </li>
    </ol>
  );
};
