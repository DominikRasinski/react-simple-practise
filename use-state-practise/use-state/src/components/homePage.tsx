import { NavLink } from 'react-router-dom';

function HomePage() {
  return (
    <div className='App-header'>
      <h1>Welcome to the Home Page</h1>
      <ol style={{ padding: '10px' }}>
        <li>
          <NavLink to='/useStateLab'>useState Lab</NavLink>
        </li>
        <li>
          <NavLink to='/staleStateLab'>Stale State Lab</NavLink>
        </li>
      </ol>
    </div>
  );
}

export default HomePage;
