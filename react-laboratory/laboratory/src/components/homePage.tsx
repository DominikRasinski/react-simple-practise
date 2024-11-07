import React from 'react';
import { LinksList } from './linksList/linksList';
import { Outlet } from 'react-router-dom';

type HomePageProps = {
  children?: React.ReactNode;
};

function HomePage(props: HomePageProps) {
  const { children } = props;

  return (
    <div className='App-header'>
      <h1>Welcome to the Home Page</h1>
      {children && children}
    </div>
  );
}

export function HomePageStructure() {
  return (
    <HomePage>
      <LinksList />
      <Outlet />
    </HomePage>
  );
}
