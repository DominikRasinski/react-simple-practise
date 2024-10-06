import React from 'react';
import { HomePageStructure } from './components/homePage';
import UseStateLab from './labolatory/useStateLab';
import { StaleStateLab } from './labolatory/staleStateLab';
import { UseEffectLab } from './labolatory/useEffectLab';
import { UseRefLab } from './labolatory/useRefLab';
import { UseReducerLab } from './labolatory/useReducerLab';
import { UseContextLab } from './labolatory/useContextLab';
import { MenuForLabStructure } from './components/menuForLab';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            index
            element={<HomePageStructure />}
          />
          <Route
            path='/'
            element={<MenuForLabStructure />}>
            <Route
              path='useStateLab'
              element={<UseStateLab />}
            />
            <Route
              path='/staleStateLab'
              element={<StaleStateLab />}
            />
            <Route
              path='/useEffectLab'
              element={<UseEffectLab />}
            />
            <Route
              path='/useRefLab'
              element={<UseRefLab />}
            />
            <Route
              path='/useReducerLab'
              element={<UseReducerLab />}
            />
            <Route
              path='/useContextLab'
              element={<UseContextLab />}
            />
          </Route>

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