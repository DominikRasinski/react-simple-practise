import { Outlet } from "react-router-dom";
import { LinksList } from "./linksList";
import { MenuStrategy } from "../modules/MenuStrategy";
import { useEffect } from "react";

type MenuForLabProps = {
  headerName?: string;
  children?: React.ReactNode;
};

const MenuForLab = (props: MenuForLabProps) => {
  const { children, headerName = "Menu" } = props;

  return (
    <main className="flex flex-row h-full">
      <div className="w-1/5 h-full bg-slate-800 overflow-y-scroll max-h-screen min-h-screen">
        <h1 className="bg-slate-600 gap-4 p-2">{headerName}</h1>
        {children && children}
      </div>
      <div className="w-4/5 max-h-screen min-h-screen overflow-y-scroll">
        <Outlet />
      </div>
    </main>
  );
};

export function MenuForLabStructure() {
  return (
    <>
      <MenuForLab>
        <LinksList />
      </MenuForLab>
    </>
  );
}
