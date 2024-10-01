import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import UseStateLab from './useStateLab';

function HomePage() {
  return (
    <div className='App-header'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/UseStateLab'
            element={<UseStateLab />}
          />
          <Route
            path='*'
            element={<HomePage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default HomePage;
