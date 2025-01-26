import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseStateLab from "../../labolatory/useStateLab";
import { StaleStateLab } from "../../labolatory/staleStateLab";
import { UseEffectLab } from "../../labolatory/useEffectLab";
import { UseRefLab } from "../../labolatory/useRefLab";
import { UseReducerLab } from "../../labolatory/useReducerLab";
import { UseContextLab } from "../../labolatory/useContextLab";
import { ReduxLab } from "../../labolatory/reduxLab";
import React from "react";
import { MenuForLabStructure } from "../menuForLab";
import { HomePageStructure } from "../homePage";

export const RoutesElement = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<HomePageStructure />} />
        <Route path="/" element={<MenuForLabStructure />}>
          <Route path="useStateLab" element={<UseStateLab />} />
          <Route path="/staleStateLab" element={<StaleStateLab />} />
          <Route path="/useEffectLab" element={<UseEffectLab />} />
          <Route path="/useRefLab" element={<UseRefLab />} />
          <Route path="/useReducerLab" element={<UseReducerLab />} />
          <Route path="/useContextLab" element={<UseContextLab />} />
          <Route path="/reduxLab" element={<ReduxLab />} />
        </Route>

        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};
