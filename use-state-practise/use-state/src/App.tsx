import React from 'react';
import HomePage from './components/homePage';
import UseStateLab from './components/useStateLab';
import { StaleStateLab } from './components/staleStateLab';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path='/useStateLab'
            element={<UseStateLab />}
          />
          <Route
            path='/staleStateLab'
            element={<StaleStateLab />}
          />
          <Route
            path='*'
            element={<div>Not Found</div>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
