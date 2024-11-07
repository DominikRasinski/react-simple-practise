import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { HomePageStructure } from './components/homePage';
import UseStateLab from './labolatory/useStateLab';
import { StaleStateLab } from './labolatory/staleStateLab';
import { UseEffectLab } from './labolatory/useEffectLab';
import { UseRefLab } from './labolatory/useRefLab';
import { UseReducerLab } from './labolatory/useReducerLab';
import { UseContextLab } from './labolatory/useContextLab';
import { MenuForLabStructure } from './components/menuForLab';
import { ReduxLab } from './labolatory/reduxLab';
import {LinksList} from "./components/linksList/linksList";
import './App.css';

function App() {
  return (
    <div className='App'>
      <LinksList type={'routes'} />
    </div>
  );
}

export default App;
