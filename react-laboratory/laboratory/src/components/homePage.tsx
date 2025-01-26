import React from "react";
import { LinksList } from "./linksList/linksList";
import { Outlet } from "react-router-dom";

type HomePageProps = {
  children?: React.ReactNode;
};

function HomePage(props: HomePageProps) {
  const { children } = props;

  return (
    <div className="App-header w-full h-full flex flex-col">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1>Welcome to the Home Page</h1>
        {children && children}
      </div>
    </div>
  );
}

export function HomePageStructure() {
  return (
    <HomePage>
      <div className="p-4">
        <LinksList />
        <Outlet />
      </div>
    </HomePage>
  );
}
