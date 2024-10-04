import React from 'react';
import { LinksList } from './linksList';

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
    </HomePage>
  );
}
